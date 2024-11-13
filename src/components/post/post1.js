import React from "react";

export const Title1 = () => {
    return (
        <>
            <h1
            className="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl"
            itemProp="headline"
            title="Rise of Tailwind - A Utility First CSS Framework"
            >
                Rent the Perfect Party
            </h1>
        </>
    )
}

export const DataPost1 = () => {
    return (
        <>
            <p className="text-base text-gray-500">
                November 13, 2024 — Written by Pipopa
            </p>
        </>
    )
}

export const HeadParagraph1 = () => {
    return (
        <>
            <p>
            Planning a special occasion can be stressful, but it doesn't have to be. With Pipopa, you can rent everything you need to host the perfect party, from party equipment to decor.
            </p>
        </>
    )
}

export const Image1 = () => {
    return (
        <>
            <img
          src="/party.jpg"
          className="object-cover w-full h-64 bg-center rounded"
          alt="Kutty"
        />
        </>
    )
}

export const Content1 = () => {
    return (
        <>
            <section className="p-8 text-gray-800">
                <h2 className="text-2xl font-bold mb-4">Why Rent for Your Special Occasion?</h2>
                <ul className="space-y-2 list-disc list-inside">
                    <li><strong className="font-semibold">Save Money:</strong> Avoid the high cost of purchasing party supplies.</li>
                    <li><strong className="font-semibold">Reduce Waste:</strong> Minimize your environmental impact by renting reusable items.</li>
                    <li><strong className="font-semibold">Convenience:</strong> Rent everything you need in one place.</li>
                    <li><strong className="font-semibold">Flexibility:</strong> Choose the perfect items for your specific event.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">What You Can Rent for Your Special Occasion:</h3>
                <ul className="space-y-2 list-disc list-inside">
                    <li><strong className="font-semibold">Entertainment Equipment:</strong> Sound systems, projectors, and gaming consoles.</li>
                    <li><strong className="font-semibold">Party Equipment:</strong> Kids' toys, tents, tables, chairs, and more.</li>
                    <li><strong className="font-semibold">Party Decor:</strong> Balloons, banners, tablecloths, and centerpieces.</li>
                    <li><strong className="font-semibold">Kitchenware:</strong> Dinnerware, glassware, and cutlery.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4">How to Plan Your Perfect Party with Pipopa</h2>
                <ol className="space-y-3 list-decimal list-inside">
                    <li><strong className="font-semibold">Choose Your Occasion:</strong> Whether it’s a birthday party, wedding, or corporate event, we have you covered.</li>
                    <li><strong className="font-semibold">Select Your Items:</strong> Browse our extensive inventory and choose the perfect items for your party.</li>
                    <li><strong className="font-semibold">Book Your Rental:</strong> Reserve your items online or through our app.</li>
                    <li><strong className="font-semibold">Enjoy Your Event:</strong> Relax and enjoy your special occasion knowing that everything is taken care of.</li>
                </ol>

                <h3 className="text-xl font-semibold mt-10 mb-4">Conclusion</h3>
                <p className="mb-4">Make your next special occasion unforgettable with Pipopa. Rent the perfect party and create lasting memories.</p>
                <p className="text-center font-bold text-lg text-indigo-600">Rent Your Perfect Party Today</p>
            </section>
        </>
    )
}