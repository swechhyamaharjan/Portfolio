import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/sendContact`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      toast.success(res.data.message || "Message sent successfully!!")
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "swekchya.mjn@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+977 9849680462",
      color: "text-green-400"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "Kathmandu, Nepal",
      color: "text-purple-400"
    }
  ]

  return (
    <section className='min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 pt-24 sm:pt-28 md:pt-32 pb-20 bg-gray-950'>
      <div className='w-full max-w-6xl mx-auto'>

        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-16 md:mb-20'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4'>Get In Touch</h2>
          <div className='w-24 h-2 bg-purple-500 mx-auto rounded-full mb-6'></div>
          <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4'>
            Have a project in mind? Let's talk about it
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12'>

          {/* Left Side - Contact Info */}
          <div>
            <h3 className='text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8'>Contact Information</h3>

            <div className='space-y-5 sm:space-y-6 mb-10 sm:mb-12'>
              {contactInfo.map((item, index) => (
                <div key={index} className='flex items-center gap-4'>
                  <div className={`text-2xl sm:text-3xl ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className='text-gray-400 text-xs sm:text-sm'>{item.title}</p>
                    <p className='text-white text-base sm:text-lg font-bold'>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className='text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6'>Follow Me</h4>
              <div className='flex gap-4'>
                <a href="https://github.com/swechhyamaharjan?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gray-800 rounded-2xl text-white hover:bg-purple-500 transition-colors'>
                  <FaGithub className='text-xl sm:text-2xl' />
                </a>
                <a href="https://www.linkedin.com/in/swechhya-maharjan-62b60525a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gray-800 rounded-2xl text-white hover:bg-purple-500 transition-colors'>
                  <FaLinkedin className='text-xl sm:text-2xl' />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className='bg-gray-800 p-6 sm:p-8 rounded-3xl border-2 border-gray-700'>
            <h3 className='text-2xl sm:text-3xl font-black text-white mb-6'>Send Message</h3>

            <form onSubmit={handleSubmit}>
              <div className='mb-5 sm:mb-6'>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 text-white rounded-2xl border-2 border-gray-700 focus:border-purple-500 outline-none transition-colors text-sm sm:text-base'
                  required
                />
              </div>

              <div className='mb-5 sm:mb-6'>
                <input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 text-white rounded-2xl border-2 border-gray-700 focus:border-purple-500 outline-none transition-colors text-sm sm:text-base'
                  required
                />
              </div>

              <div className='mb-5 sm:mb-6'>
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 text-white rounded-2xl border-2 border-gray-700 focus:border-purple-500 outline-none transition-colors text-sm sm:text-base'
                  required
                />
              </div>

              <div className='mb-5 sm:mb-6'>
                <textarea
                  name='message'
                  placeholder='Your Message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='6'
                  className='w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 text-white rounded-2xl border-2 border-gray-700 focus:border-purple-500 outline-none transition-colors resize-none text-sm sm:text-base'
                  required
                ></textarea>
              </div>

              <button type='submit'
                className={`w-full px-8 py-4 sm:px-10 sm:py-5 text-white rounded-2xl font-black text-base sm:text-lg transition-colors ${loading ? "bg-gray-600 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"}`}
                disabled={loading}
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact