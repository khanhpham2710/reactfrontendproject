const packages = [
    {
        type: "Basic",
        services: ["Book tickets", "Access to standard movie library"],
        price: 0
    },
    {
        type: 'Standard',
        services: ["Book tickets", "No Ads", "Access to premium movie library", "Watch in HD"],
        price: 19.99
    },
    {
        type: "Premium",
        services: ["Book tickets", "No Ads", "Access to all movies", "Watch in 4K UHD", "Unlimited show access", "Early access to new releases"],
        price: 39.99
    }
]

export default packages;