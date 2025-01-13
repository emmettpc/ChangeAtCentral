import React from 'react';
import { Box, Typography, Link, List, ListItem, Divider, ListItemText, Tooltip } from '@mui/material';
import prideBooksIMG from '../assets/artworks/pride_books.png';

function Resources() {
    const linksData = [
        {
            label: 'Point of Pride',
            url: 'https://www.pointofpride.org/resource-library',
            description:
                'Point of Pride is an organization dedicated to supporting trans and genderqueer people by providing them access to vital resources and financial assistance. They offer free chest binders and gender-affirming clothing to those in need and maintain a comprehensive resource library. This organization is important because it helps to alleviate the financial burden many genderqueer people face when accessing gender-affirming items.',
            shortDescription:
                'Provides free chest binders, gender-affirming clothing, and resources for trans and genderqueer individuals.',
        },
        {
            label: 'The Trever Project',
            url: 'https://www.thetrevorproject.org',
            description:
                'The Tervor Project is the leading organization focused on preventing suicide among LGBTQ+ youth. It provides 24/7 crisis support, resources, and advocacy to promote mental health and well-being. The Trevor Project also offers workshops and educational materials on LGBTQ+ issues. They help to create safer spaces for queer youth, offering life-saving support, and educating allies.',
            shortDescription: 'Offers crisis support, suicide prevention, and resources for LGBTQ+ youth.',
        },
        {
            label: "What's the T by Juno Dawson",
            url: 'https://www.goodreads.com/book/show/60383239-what-s-the-t-the-guide-to-all-things-trans-and-or-nonbinary',
            description:
                '"What\'s the T" by Juno Dawson is a guidebook for understanding what it means to be trans or genderqueer. It is packed with advice and answers to common questions about gender, and it includes a glossary of LGBTQ+ terms and additional resources for further exploration. This book can be helpful for individuals questioning their identity, or for allies that are seeking to learn more about gender diversity.',
            shortDescription:
                'A guidebook answering common questions about gender and providing resources for genderqueer people.',
        },
        {
            label: "St. Paul's Johnson High Eliminating Gender-Specific Restrooms - Pioneer Press Article",
            url: 'https://www.twincities.com/2016/05/03/st-pauls-johnson-high-converting-all-restrooms-to-single-occupancy',
            description:
                'In 2016, Johnson High School became the first high school in the Saint Paul Public Schools district to convert all restrooms into single-occupancy, gender-neutral facilities, and this article covers the change. It  not only added more stalls but also created a safer and more inclusive environment for students and staff. It shows the feasibility of important changes like this ones.',
            shortDescription:
                "Details Johnson High's shift to gender-neutral restrooms and its positive impact on students.",
        },

        {
            label: 'In St. Paul Schools, Gender-Neutral Bathrooms Have Proven Safer for All Students - MPR Article',
            url: 'https://www.mprnews.org/story/2023/09/22/in-st-paul-schools-genderneutral-bathrooms-have-proven-safer-for-all-students',
            description:
                'This article by MPR News demonstrates the significance of having gender-neutral bathrooms in schools, focusing on their implementation at Johnson High School. It shows how these bathrooms help to improve privacy, safety, and comfort for all students, especially trans and gender-nonconforming individuals. It shows the shear importance of inclusive facilities like this in schools, and its positive impact on well-being and equity of genderqueer students.',
            shortDescription: 'Highlights the benefits of gender-neutral restrooms for safety, comfort, and inclusion.',
        },
        {
            label: 'Inclusive Restrooms - St. Paul Public Schools Article',
            url: 'https://www.spps.org/about/departments/facilities/planning-design-and-construction/inclusive-restrooms',
            description:
                'This section on the Saint Paul Public Schools website describes their plan to implement gender-neutral restrooms across all schools in the district. It highlights the features like floor-to-ceiling stalls, locks, and enhanced privacy, as well as answers to common questions. It educates communities about the importance of inclusive restroom designs, which creates a safe and welcoming environment for all students.',
            shortDescription:
                "Explains SPPS's efforts to implement safe, gender-neutral restrooms in all SPPS schools.",
        },
    ];

    return (
        <Box
            sx={{
                padding: '2rem',
                backgroundColor: '#121212',
                marginTop: '1rem',
                marginBottom: '-3rem',
            }}
            id="resources"
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    color: '#ffffff',
                }}
            >
                Helpful Resources
            </Typography>
            <Box
                component="img"
                src={prideBooksIMG}
                alt="Pride Books Artwork"
                sx={{
                    maxWidth: '70%',
                    maxHeight: '70%',
                    marginTop: '1rem',
                    borderRadius: '2rem',
                }}
            />
            <List>
                {linksData.map((link, index) => (
                    <React.Fragment key={index}>
                        <ListItem
                            sx={{
                                padding: '8px 0',
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <ListItemText
                                primary={
                                    <Tooltip
                                        title={link.shortDescription}
                                        placement="top"
                                    >
                                        <Link
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: '#bb86fc',
                                                textDecoration: 'none',
                                                fontWeight: 'bold',
                                                fontSize: '1rem',
                                                paddingLeft: '12px',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </Tooltip>
                                }
                                secondary={
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#b0b0b0',
                                            paddingLeft: '32px',
                                        }}
                                    >
                                        {link.description}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        {index < linksData.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
}

export default Resources;
