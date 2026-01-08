import { useState } from 'react';
import { Upload, FileText, Check, AlertCircle, X, Download } from 'lucide-react';
import { cn } from '../lib/utils';

const EmployerUpload = () => {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        setFile(file);
        setUploadStatus('scanning');
        // Simulate scan
        setTimeout(() => {
            setUploadStatus('success');
        }, 2000);
    };

    const resetUpload = () => {
        setFile(null);
        setUploadStatus('idle');
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-nsps-neutral-900">Bulk Contribution Upload</h1>
                    <p className="text-nsps-neutral-600 mt-1">Submit monthly returns via CSV or Excel template.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-nsps-neutral-300 rounded-lg text-sm font-medium hover:bg-nsps-neutral-50 text-nsps-neutral-700">
                    <Download className="w-4 h-4" /> Download Template
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-nsps-neutral-200 overflow-hidden">
                <div className="p-8">
                    {uploadStatus === 'idle' && (
                        <div
                            className={cn(
                                "relative border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center transition-colors cursor-pointer",
                                dragActive ? "border-nsps-blue-500 bg-nsps-blue-50" : "border-nsps-neutral-300 hover:border-nsps-blue-400 hover:bg-nsps-neutral-50"
                            )}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={handleChange}
                                accept=".csv,.xlsx,.xls"
                            />
                            <div className="h-16 w-16 bg-nsps-blue-100 text-nsps-blue-600 rounded-full flex items-center justify-center mb-4">
                                <Upload className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-nsps-neutral-900">Drag & Drop file here</h3>
                            <p className="text-sm text-nsps-neutral-500 mt-2">or click to browse your computer</p>
                            <p className="text-xs text-nsps-neutral-400 mt-4">Supported formats: CSV, Excel (.xlsx)</p>
                        </div>
                    )}

                    {uploadStatus === 'scanning' && (
                        <div className="py-12 flex flex-col items-center justify-center text-center">
                            <div className="h-16 w-16 border-4 border-nsps-blue-100 border-t-nsps-blue-600 rounded-full animate-spin mb-6"></div>
                            <h3 className="text-lg font-bold text-nsps-neutral-900">Validating File...</h3>
                            <p className="text-sm text-nsps-neutral-500 mt-1">Checking for format errors and missing fields</p>
                            <p className="text-xs font-mono text-nsps-neutral-400 mt-4">{file?.name}</p>
                        </div>
                    )}

                    {uploadStatus === 'success' && (
                        <div className="py-8">
                            <div className="flex flex-col items-center justify-center text-center mb-8">
                                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-nsps-neutral-900">Validation Successful</h3>
                                <p className="text-sm text-nsps-neutral-500 mt-1">Ready to process 1,248 records for January 2026</p>
                            </div>

                            <div className="bg-nsps-neutral-50 rounded-xl p-6 border border-nsps-neutral-200 mb-8 max-w-2xl mx-auto">
                                <div className="flex justify-between py-2 border-b border-nsps-neutral-200">
                                    <span className="text-sm text-nsps-neutral-600">File Name</span>
                                    <span className="text-sm font-medium text-nsps-neutral-900">{file?.name}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-nsps-neutral-200">
                                    <span className="text-sm text-nsps-neutral-600">Total Valid Records</span>
                                    <span className="text-sm font-medium text-green-600">1,248</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-sm text-nsps-neutral-600">Total Amount</span>
                                    <span className="text-sm font-bold text-nsps-blue-900">K 450,290.00</span>
                                </div>
                            </div>

                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={resetUpload}
                                    className="px-6 py-3 border border-nsps-neutral-300 text-nsps-neutral-700 font-bold rounded-lg hover:bg-nsps-neutral-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button className="px-6 py-3 bg-nsps-blue-600 text-white font-bold rounded-lg hover:bg-nsps-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                                    Submit Return
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmployerUpload;
