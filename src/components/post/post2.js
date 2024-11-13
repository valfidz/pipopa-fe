import React from "react";

export const Title2 = () => {
    return (
        <>
            <h1
            className="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl"
            itemProp="headline"
            title="Rise of Tailwind - A Utility First CSS Framework"
            >
                Upgrade Your Home, Rent the Rest
            </h1>
        </>
    )
}

export const DataPost2 = () => {
    return (
        <>
            <p className="text-base text-gray-500">
                November 13, 2024 — Written by Pipopa
            </p>
        </>
    )
}

export const HeadParagraph2 = () => {
    return (
        <>
            <p>
            Tired of the hassle and expense of owning appliances? Pipopa offers a convenient and cost-effective solution: appliance rental. By renting your appliances, you can enjoy the latest technology without the long-term commitment.
            </p>
        </>
    )
}

export const Image2 = () => {
    return (
        <>
            <img
          src="/appliances.jpg"
          className="object-cover w-full h-64 bg-center rounded"
          alt="Kutty"
        />
        </>
    )
}

export const Content2 = () => {
    return (
        <>
            <section className="p-8 text-gray-800">
                <h2 className="text-2xl font-bold mb-4">Tired of the hassle and expense of owning appliances?</h2>
                <p className="mb-6">
                    Pipopa offers a convenient and cost-effective solution: appliance rental. By renting your appliances, you can enjoy the latest technology without the long-term commitment.
                </p>

                <h3 className="text-xl font-semibold mb-4">The Benefits of Renting Appliances</h3>
                <ul className="space-y-2 list-disc list-inside mb-8">
                    <li><strong className="font-semibold">Save Money:</strong> Avoid upfront costs and ongoing maintenance expenses.</li>
                    <li><strong className="font-semibold">Stay Updated:</strong> Always have the latest models and features.</li>
                    <li><strong className="font-semibold">Flexible Plans:</strong> Choose rental terms that suit your lifestyle.</li>
                    <li><strong className="font-semibold">Hassle-Free:</strong> No need to worry about repairs or replacements.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Why Choose Pipopa?</h3>
                <ul className="space-y-2 list-disc list-inside mb-8">
                    <li><strong className="font-semibold">Wide Range of Appliances:</strong> From refrigerators to washing machines, we have it all.</li>
                    <li><strong className="font-semibold">Easy Rental Process:</strong> A simple and convenient online rental process.</li>
                    <li><strong className="font-semibold">Prompt Delivery and Setup:</strong> Our team ensures timely delivery and professional setup.</li>
                    <li><strong className="font-semibold">Excellent Customer Service:</strong> Dedicated support to assist you throughout your rental journey.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Upgrade Your Home Today</h3>
                <p className="mb-4">
                    Ready to experience the future of home appliances? Visit our website or download our app to explore our range of rental options.
                </p>
                <p className="text-center font-bold text-lg text-indigo-600">Rent Now, Upgrade Your Living Space</p>
            </section>
        </>
    )
}