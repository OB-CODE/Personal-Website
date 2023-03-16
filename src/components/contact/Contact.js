import React from "react";


import './Contact.scss';

import actions from '../Nav/linkDetails'


const Contact = () => {


    return (
      <section id="contact">
        <div className='containerContact'>
        <div valign='bottom' className="botCircle botSmall shade2"></div>
        <div valign='bottom' className="botCircle botSmall2 shade2"></div>

          <div class="contact">
            <div  class="w-full md:w-96 md:max-w-full mx-auto back bg-yellow-50 z-10">

            <div class="w-full md:w-96 md:max-w-full mx-auto">
              <div class="p-6 border border-gray-300 sm:rounded-md">
                <form method="POST" action="https://public.herotofu.com/v1/25538e50-c3a0-11ed-ae6a-6754484ba23d">
                  <label class="block mb-6">
                    <span class="text-gray-700">Your name</span>
                    <input
                      type="text"
                      name="name"
                      class="
                        block
                        w-full
                        mt-1
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                      placeholder="M O'Brien"
                    />
                  </label>
                  <label class="block mb-6">
                    <span class="text-gray-700">Email address</span>
                    <input
                      name="email"
                      type="email"
                      class="
                        block
                        w-full
                        mt-1
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                      placeholder="mitchell.s.obrien@gmail.com"
                      required
                    />
                  </label>
                  <label class="block mb-6">
                    <span class="text-gray-700">Message</span>
                    <textarea
                      name="message"
                      class="
                        block
                        w-full
                        mt-1
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                      rows="3"
                      placeholder="I will get back to you ASAP..."
                    ></textarea>
                  </label>
                  <div class="mb-6">
                    <button
                      type="submit"
                      class="
                        h-10
                        px-5
                        text-indigo-100
                        bg-indigo-700
                        rounded-lg
                        transition-colors
                        duration-150
                        focus:shadow-outline
                        hover:bg-indigo-800
                      "
                    >
                      Contact Mitch
                    </button>
                  </div>
                  <div>
                    <div class="mt-2 text-gray-700 text-right text-xs">
                      by
                      <a href="https://herotofu.com" class="hover:underline" target="_blank"
                        >HeroTofu</a
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>


            </div>
            <h1 className="contact_msg">
              <div>Want to talk programming... or surf spots? Drop me a line!</div>
            </h1>
          </div>
        </div>
        <div className="botStrip">
          <h3>Made by Mitch O'Brien</h3>
        <div className="spreadDetails">
          {actions.map((action, index) => 
            <div key={action.name}>
              <a href={action.url}>
                <div>{action.name}</div>
                <svg className="icons" width='50px' height='50px'>{action.icon}</svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact;

// key={action.name}
// icon={action.icon}
// tooltipTitle={action.name}
// href={action.url}