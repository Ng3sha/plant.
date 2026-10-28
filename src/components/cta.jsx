// import React from 'react'

import Button from "./button";

export default function Cta() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32">
            <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Start your journey to smarter management
                </h2>
                <div className="mt-6 space-y-4 lg:hidden">
                <p className="text-lg text-gray-600">
                    Transform the way you manage your business with our cutting-edge
                    SaaS solution. Our platform is designed to simplify your workflows,
                    boost productivity, and give you the insights you need to make
                    informed decisions.
                </p>
                <p className="text-lg text-gray-600">
                    Join a community of forward-thinking businesses that are already
                    benefiting from our comprehensive tools. Sign up now to discover how
                    our solution can drive your success.
                </p>
                </div>
                <form
                method="POST"
                action="#"
                className="mt-10 flex flex-col gap-y-4 sm:items-start"
                >
                <label htmlFor="email" className="sr-only">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required=""
                    className="w-full rounded-md border-0 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:max-w-xs sm:text-sm sm:leading-6"
                />
                <Button
                    type={"submit"}
                    btnname={"Get exclusive access"}
                    className="rounded-md bg-green-700 px-5 py-2.5 text-xl font-medium text-white shadow hover:bg-green-600"

                />
                </form>
            </div>
            <div className="hidden space-y-4 lg:block">
                <p className="text-lg text-gray-600">
                Transform the way you manage your business with our cutting-edge SaaS
                solution. Our platform is designed to simplify your workflows, boost
                productivity, and give you the insights you need to make informed
                decisions.
                </p>
                <p className="text-lg text-gray-600">
                Join a community of forward-thinking businesses that are already
                benefiting from our comprehensive tools. Sign up now to discover how
                our solution can drive your success.
                </p>
            </div>
            </div>
        </div>
    </div>

    </>
  )
}
