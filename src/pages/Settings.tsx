import {
  Bell,
  Lock,
  Moon,
  Shield,
  User,
  ChevronRight,
} from "lucide-react";

const Settings = () => {
  const settings = [
    {
      icon: User,
      title: "Personal Information",
      description: "Update your profile details",
    },
    {
      icon: Lock,
      title: "Password & Security",
      description: "Manage password and account security",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Control notification preferences",
    },
    {
      icon: Moon,
      title: "Appearance",
      description: "Theme and display settings",
    },
    {
      icon: Shield,
      title: "Privacy",
      description: "Manage account privacy settings",
    },
  ];

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#FFF8CA]">
          Settings
        </h1>

        <p className="mt-2 text-[#FFF8CA]/60">
          Manage your Fluxa account and preferences.
        </p>
      </div>

      {/* Settings List */}
      <div className="mt-8 space-y-4">
        {settings.map((setting) => {
          const Icon = setting.icon;

          return (
            <button
              key={setting.title}
              className="
                w-full
                rounded-2xl
                border border-[#FFF8CA]/10
                bg-[#3A1A14]
                p-5
                transition
                hover:border-[#FFF8CA]/20
                hover:bg-[#421d17]
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-xl
                      bg-[#642409]
                    "
                  >
                    <Icon
                      size={20}
                      className="text-[#FFF8CA]"
                    />
                  </div>

                  <div className="text-left">
                    <h3 className="font-semibold text-[#FFF8CA]">
                      {setting.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#FFF8CA]/60">
                      {setting.description}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={18}
                  className="text-[#FFF8CA]/40"
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Danger Zone */}
      <div
        className="
          mt-10
          rounded-2xl
          border border-red-500/20
          bg-red-950/10
          p-6
        "
      >
        <h2 className="text-lg font-semibold text-red-300">
          Danger Zone
        </h2>

        <p className="mt-2 text-sm text-red-200/70">
          Permanently delete your account and all associated data.
        </p>

        <button
          className="
            mt-4
            rounded-xl
            bg-red-600
            px-4
            py-2
            text-sm
            font-medium
            text-white
            hover:bg-red-700
          "
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;