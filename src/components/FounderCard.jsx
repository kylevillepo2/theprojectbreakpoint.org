import React from "react";

const FounderCard = ({ image, name, role, description }) => {
  // Special styling for specific founder images
  const isArjun = image.includes("arjun.png");
  const isKyle = image.includes("Kyle.png");
  const isQuyen = image.includes("QuyenImg2.jpg");
  
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 hover:z-10 overflow-hidden border border-green-100 relative">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`${name}`} 
          className={`w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300 ${
            isArjun ? 'object-center' : 
            isKyle ? 'object-top scale-125' : 
            isQuyen ? 'object-top' :
            'object-top'
          }`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tennis Icon */}
        <div className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-full shadow-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-xl font-bold text-green-700 mb-2 group-hover:text-green-600 transition-colors duration-300">
          {name}
        </h3>
        
        {/* Role */}
        <div className="mb-4">
          <span className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            {role}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
        
        {/* University Badge */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-500 font-medium">Student Leader</span>
          </div>
          
          {/* Social Links - Only for Kyle */}
          {isKyle && (
            <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a 
                href="https://www.linkedin.com/in/kylevillepo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-100 hover:bg-green-200 text-green-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
