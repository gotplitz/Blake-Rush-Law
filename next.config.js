module.exports = {
    images: {
        domains: ['localhost', 'blakewp.ferociousmediaweb.com'],
    },
};

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.blakerushlaw.com/api/:path*',
            },
        ];
    },
};
