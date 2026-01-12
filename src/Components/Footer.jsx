import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10 text-center">
  <p>© 2026 Abubakar. All Rights Reserved.</p>
  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-2 text-sm">
    <a href="https://github.com/" target="_blank" className="hover:text-blue-400 transition">GitHub</a>
    <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-400 transition">LinkedIn</a>
    <a href="mailto:youremail@example.com" className="hover:text-blue-400 transition">Email</a>
  </div>
</footer>

  )
}

export default Footer