import {
    User,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    Calendar,
    Edit2,
    Shield
} from 'lucide-react';

const MemberProfile = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">

            {/* Profile Header */}
            <div className="relative bg-white rounded-2xl shadow-sm border border-nsps-neutral-200 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-nsps-blue-900 to-nsps-blue-600"></div>
                <div className="px-8 pb-8">
                    <div className="relative flex justify-between items-end -mt-12">
                        <div className="flex items-end gap-6">
                            <div className="h-24 w-24 rounded-2xl bg-white p-1 shadow-md">
                                <div className="h-full w-full bg-nsps-neutral-100 rounded-xl flex items-center justify-center text-3xl font-bold text-nsps-blue-900">
                                    JD
                                </div>
                            </div>
                            <div className="mb-1">
                                <h1 className="text-2xl font-bold text-nsps-neutral-900">John Doe</h1>
                                <p className="text-nsps-neutral-600">Software Engineer at Tech Corp Zambia</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-nsps-blue-50 text-nsps-blue-700 rounded-lg hover:bg-nsps-blue-100 transition-colors font-medium text-sm">
                            <Edit2 className="w-4 h-4" /> Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Main Info */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-nsps-neutral-200">
                        <h2 className="text-lg font-bold text-nsps-neutral-900 mb-4 flex items-center gap-2">
                            <User className="w-5 h-5 text-nsps-blue-600" /> Personal Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-nsps-neutral-500 uppercase">Full Name</label>
                                <p className="font-medium text-nsps-neutral-900">John Doe</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-nsps-neutral-500 uppercase">NRC Number</label>
                                <p className="font-medium text-nsps-neutral-900">123456/78/1</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-nsps-neutral-500 uppercase">Date of Birth</label>
                                <div className="flex items-center gap-2 text-nsps-neutral-900 font-medium">
                                    <Calendar className="w-4 h-4 text-nsps-neutral-400" /> Jan 15, 1985
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-nsps-neutral-500 uppercase">Gender</label>
                                <p className="font-medium text-nsps-neutral-900">Male</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-nsps-neutral-500 uppercase">Marital Status</label>
                                <p className="font-medium text-nsps-neutral-900">Married</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-nsps-neutral-500 uppercase">Nationality</label>
                                <p className="font-medium text-nsps-neutral-900">Zambian</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-nsps-neutral-200">
                        <h2 className="text-lg font-bold text-nsps-neutral-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-nsps-blue-600" /> Contact Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-nsps-neutral-500 uppercase">Email Address</label>
                                <div className="flex items-center gap-2 text-nsps-neutral-900 font-medium">
                                    <Mail className="w-4 h-4 text-nsps-neutral-400" /> john.doe@example.com
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-nsps-neutral-500 uppercase">Phone Number</label>
                                <div className="flex items-center gap-2 text-nsps-neutral-900 font-medium">
                                    <Phone className="w-4 h-4 text-nsps-neutral-400" /> +260 97 123 4567
                                </div>
                            </div>
                            <div className="md:col-span-2 space-y-1">
                                <label className="text-xs font-semibold text-nsps-neutral-500 uppercase">Physical Address</label>
                                <p className="font-medium text-nsps-neutral-900">Plot 123, Great East Road, Lusaka, Zambia</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side Info */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-nsps-neutral-200">
                        <h2 className="text-lg font-bold text-nsps-neutral-900 mb-4 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-nsps-blue-600" /> Employment
                        </h2>
                        <div className="space-y-4">
                            <div className="p-3 bg-nsps-neutral-50 rounded-lg">
                                <p className="text-xs text-nsps-neutral-500">Current Employer</p>
                                <p className="font-bold text-nsps-blue-900">Tech Corp Zambia Ltd</p>
                                <p className="text-xs text-nsps-neutral-500 mt-1">Since 2021</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-nsps-neutral-500 uppercase">Social Security No.</label>
                                <p className="font-mono font-medium text-nsps-neutral-900">SSN-8829-192</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-nsps-blue-50 rounded-2xl p-6 border border-nsps-blue-100">
                        <h2 className="text-lg font-bold text-nsps-blue-900 mb-2 flex items-center gap-2">
                            <Shield className="w-5 h-5" /> KYC Status
                        </h2>
                        <p className="text-sm text-nsps-neutral-600 mb-4">Your account is fully verified.</p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                                <span className="text-nsps-blue-900 font-medium">Identity Verified</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                                <span className="text-nsps-blue-900 font-medium">Address Verified</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                                <span className="text-nsps-blue-900 font-medium">Mobile Verified</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MemberProfile;
