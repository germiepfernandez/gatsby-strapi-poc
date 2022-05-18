/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static`,
            },
        },
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: `http://ec2-54-255-189-176.ap-southeast-1.compute.amazonaws.com:1337`,
                // accessToken: `fcb35e8ce3dc61a9bb9405d7523a049c951e06adb6f5c2796d564fff7edd6d2a55b8510208c77ade4b7ab5b32f335b65fb1d88110046d8d5b307d8f125e5e5565acde6e7abd312aaae971dabe569dbc7494cb3ae2f697ac53e67ff1ee9ed804f0644086efe9af50ef6e219edf7619993a06d20d3a1a941ce48a50bd0bcd71761`,
                collectionTypes: ['project', 'contact-us', 'fact'],
                singleTypes: [
                    {
                        singularName: 'solution',
                        queryParams: {
                            populate: {
                                list: {
                                    populate: '*',
                                },
                            },
                        },
                    },
                    {
                        singularName: 'home-banner',
                    },
                    {
                        singularName: 'client',
                        queryParams: {
                            populate: {
                                clients: {
                                    populate: '*',
                                },
                            },
                        },
                    },
                    {
                        singularName: 'iot',
                        queryParams: {
                            populate: {
                                applist: {
                                    populate: '*',
                                },
                            },
                        },
                    },
                    {
                        singularName: 'info',
                    },
                ],
                queryLimit: 10000,
            },
        },
        'gatsby-plugin-sass',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        `gatsby-plugin-image`,
    ],
    siteMetadata: {
        title: 'Gatsby POC',
        description: 'POC for importing website to Gatsby',
    },
};
