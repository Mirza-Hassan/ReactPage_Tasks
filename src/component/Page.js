import React from 'react';

class Page extends React.Component {
   render() {
      return (

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full space-y-8">        
            <div class="align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border border-blue-600">
                <div class="sm:flex sm:items-start">
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-32 w-32 sm:mx-0">
                <div class="flex -space-x-1 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    William Herlands
                    </h3>
                    <div class="mt-2">
                    <p class="text-sm text-gray-500 text-blue-600">
                        Co-Founder, BZR
                    </p>
                    </div>
                    <button type="button" className="w-full bg-white mt-8 px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Accepts 90% of meetings
                    </button>
                </div>
                </div>
            </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Affilations
              </label>
              <p className="mt-2 text-sm text-gray-500">
                Co-founder, BZR | CEO, Willow | PhD Machine Learning, CMU 
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Industries
              </label>
              <div className="mt-2 flex items-center">
                <button type="button" className="w-full bg-white py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  #CyberSecurity
                </button>
                <button type="button" className="w-full ml-1 bg-white py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 #ECommerce
                </button>
                <button type="button" className="w-full ml-1 bg-white py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 #MachineLearning 
                </button>
                <button type="button" className="w-full ml-1 bg-white py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  #VentureCapital
                </button>
              </div>
            </div>    
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Request Meeting - $250 
              </button>
            </div>
        </div>
      </div>
      );
   }
}

export default Page;