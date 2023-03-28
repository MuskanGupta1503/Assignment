import * as React from 'react';
// import '../App.css';
// import '../index.css'

export default function About() {
  return (
    <>
      <section class="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <figure class="mt-10">
            <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>This website is built using Reactjs .</p>
              <p>To see different pages, click on Home, About & Profile</p>
              <p>For More Info Contact : +91 8766324609</p>
            </blockquote>
            <figcaption class="mt-10">
              <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                <div class="font-semibold text-gray-900">Made By : </div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                </svg>
                <div class="text-gray-600">Muskan Gupta</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}