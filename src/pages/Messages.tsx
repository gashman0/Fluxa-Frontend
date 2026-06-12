import { MessageSquare, Clock } from "lucide-react";

const Messages = () => {
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Recruiter • Stripe",
      message: "Hey Gustavo, I came across your profile...",
      time: "2h",
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "Frontend Lead • Vercel",
      message: "We have an exciting opportunity for you...",
      time: "1d",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Talent Partner • Notion",
      message: "Thanks for applying to our role...",
      time: "2d",
    },
  ];

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#FFF8CA]">
          Messages
        </h1>

        <p className="mt-2 text-[#FFF8CA]/60">
          Connect with recruiters, employers and professionals.
        </p>
      </div>

      {/* Coming Soon Banner */}
      <div
        className="
          mt-6
          rounded-2xl
          border border-amber-500/20
          bg-amber-500/10
          p-4
        "
      >
        <div className="flex items-center gap-3">
          <Clock
            size={18}
            className="text-amber-300"
          />

          <div>
            <h3 className="font-medium text-amber-200">
              Messaging is coming soon
            </h3>

            <p className="mt-1 text-sm text-amber-200/70">
              You'll soon be able to chat directly with
              recruiters, hiring managers and other
              professionals on Fluxa.
            </p>
          </div>
        </div>
      </div>

      {/* Demo Conversations */}
      <div className="mt-8 space-y-4">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className="
              rounded-2xl
              border border-[#FFF8CA]/10
              bg-[#3A1A14]
              p-5
              opacity-70
            "
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-full
                  bg-[#642409]
                  text-[#FFF8CA]
                  font-semibold
                "
              >
                {conversation.name.charAt(0)}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#FFF8CA]">
                    {conversation.name}
                  </h3>

                  <span className="text-xs text-[#FFF8CA]/40">
                    {conversation.time}
                  </span>
                </div>

                <p className="mt-1 text-sm text-[#FFF8CA]/60">
                  {conversation.role}
                </p>

                <p className="mt-2 text-sm text-[#FFF8CA]/70">
                  {conversation.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty Chat Preview */}
      <div
        className="
          mt-8
          rounded-2xl
          border border-dashed border-[#FFF8CA]/20
          p-8
          text-center
        "
      >
        <MessageSquare
          size={40}
          className="mx-auto text-[#FFF8CA]/40"
        />

        <h3 className="mt-4 text-lg font-semibold text-[#FFF8CA]">
          Real-time messaging coming soon
        </h3>

        <p className="mt-2 text-[#FFF8CA]/60">
          Stay tuned for direct messaging, recruiter
          conversations and networking features.
        </p>
      </div>
    </div>
  );
};

export default Messages;