import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquareText, ThumbsUp, Reply, Users, CalendarHeart, ScrollText } from 'lucide-react';

const Feature_3 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Mock community posts
  const communityPosts = [
    {
      user: "Sarah Johnson",
      role: "Diabetes Warrior",
      avatar: "https://i.pravatar.cc/150?img=32",
      content: "Sharing my glucose management routine - what works best for me!",
      likes: 142,
      comments: 38,
      time: "2h ago"
    },
    {
      user: "Mike Chen",
      role: "Cardiac Care Expert",
      avatar: "https://i.pravatar.cc/150?img=45",
      content: "New study shows promising results for home-based cardiac rehab. Thoughts?",
      likes: 89,
      comments: 24,
      time: "5h ago"
    }
  ];

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Floating Community Icons */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <Users className="absolute top-20 left-20 w-48 h-48 text-blue-600/20" />
        <MessageSquareText className="absolute bottom-20 right-20 w-48 h-48 text-cyan-500/20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-4xl sm:text-5xl font-bold text-white">
              <h2 className="mb-4">Join Our</h2>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Supportive Community
              </span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Connect, share, and learn with thousands of health warriors in our vibrant community. 
              Get emotional support, practical advice, and stay motivated through your health journey.
            </p>

            <div className="space-y-6">
              {[
                { icon: <MessageSquareText className="w-6 h-6" />, text: "Start discussions on health topics" },
                { icon: <ThumbsUp className="w-6 h-6" />, text: "Engage with likes & reactions" },
                { icon: <Reply className="w-6 h-6" />, text: "Comment & reply with threads" },
                { icon: <CalendarHeart className="w-6 h-6" />, text: "Share progress timelines" },
                { icon: <ScrollText className="w-6 h-6" />, text: "Post health journals & diaries" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-500/30 transition-all"
                >
                  <div className="text-blue-400">{feature.icon}</div>
                  <span className="text-gray-200">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Link
                to="/community"
                className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full 
                shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
              >
                Join Community Now
                <Users className="w-5 h-5 ml-3" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Community Posts Preview */}
          <motion.div variants={itemVariants} className="space-y-6">
            {communityPosts.map((post, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all"
              >
                {/* Post Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={post.avatar} 
                    alt={post.user} 
                    className="w-12 h-12 rounded-full border-2 border-blue-500/30"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{post.user}</h4>
                    <p className="text-sm text-cyan-400">{post.role}</p>
                  </div>
                  <span className="text-sm text-gray-400 ml-auto">{post.time}</span>
                </div>

                {/* Post Content */}
                <p className="text-gray-200 mb-4">{post.content}</p>

                {/* Engagement Metrics */}
                <div className="flex items-center space-x-6 text-gray-400">
                  <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                    <MessageSquareText className="w-5 h-5" />
                    <span>{post.comments} comments</span>
                  </button>
                </div>

                {/* Comment Preview */}
                {index === 0 && (
                  <div className="mt-4 pl-4 border-l-2 border-blue-500/30">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://i.pravatar.cc/150?img=12" 
                        alt="User" 
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="text-gray-300 text-sm">
                        "This helped me so much! How do you handle nighttime levels?"
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature_3;