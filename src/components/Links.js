import React from 'react';
import { Box, Typography, Link, List, ListItem, Divider, ListItemText, Tooltip } from '@mui/material';

function Links() {
    const linksData = [
        {
            label: 'Placeholder Website 1',
            url: 'https://example1.com',
            description:
                'This is a website. Id amet nulla iaculis pulvinar natoque magnis aliquam finibus facilisis. Est fringilla nisi eleifend pretium fringilla torquent. Varius mus posuere ut eu efficitur, fermentum parturient sociosqu. Pellentesque hac eget velit nibh fusce ad finibus. Pulvinar fusce nisl inceptos; eleifend eros iaculis. Facilisis convallis tempus velit erat quisque. Phasellus elementum quisque vivamus, nisl facilisi molestie fusce. Magnis habitant libero nibh suspendisse justo in sociosqu.',
            shortDescription: 'short desc 1',
        },
        {
            label: 'Placeholder Website 2',
            url: 'https://example2.com',
            description:
                'This is another website. Praesent massa ex sociosqu sollicitudin dis. Arcu euismod tortor vulputate porta sagittis. Nam facilisi mollis non convallis nullam nostra ex dolor. Tortor sagittis gravida quis erat tincidunt ultrices varius. Malesuada inceptos arcu proin viverra taciti. Consectetur mus orci donec fringilla sodales nec. Facilisis ullamcorper ex imperdiet adipiscing vehicula est tempor. Tristique curae commodo venenatis maximus auctor ornare class. Pharetra finibus turpis penatibus himenaeos sem; et parturient euismod.',
            shortDescription: 'short desc 2',
        },
        {
            label: 'Placeholder Article 1',
            url: 'https://article1.com',
            description:
                'THIS IS AN ARTICLE. Ad eros himenaeos semper dignissim auctor fames cras lacinia. Ullamcorper urna finibus nunc nulla accumsan etiam. In proin tellus mi luctus ridiculus semper. Sollicitudin nec efficitur felis vulputate; eu venenatis magnis. Dis id condimentum euismod torquent mattis integer cras diam euismod. Adipiscing tellus sed cubilia luctus turpis sociosqu.',
            shortDescription: 'short desc 3',
        },
        {
            label: 'Placeholder Article 2 (:',
            url: 'https://article2.com',
            description:
                'btw this is an aticle. Per praesent velit magna aliquet faucibus proin vestibulum. Dictumst dui primis tellus sapien id posuere mattis potenti. Tincidunt est magnis ante consequat fringilla fusce metus. Neque egestas suspendisse proin quam per convallis. Amet nostra consectetur ac id nullam mauris cursus. Vestibulum erat maecenas ut cubilia tellus sit duis porttitor. Egestas nibh mi nostra scelerisque porta mattis quis congue vestibulum.',
            shortDescription: 'short desc 4',
        },

        {
            label: 'Placeholder Resource 1',
            url: 'https://resource1.com',
            description:
                'ThIs Is A ReSoUrCe. Tortor ex ex scelerisque est non integer. Litora taciti nisi urna iaculis pharetra turpis eu. Quis mollis rhoncus penatibus sem convallis proin porta rhoncus diam. Lacus ante fringilla egestas est odio nibh tempus. Condimentum elementum habitant torquent conubia egestas bibendum, in curae. Aptent donec hendrerit dictumst sagittis praesent non per. Odio suspendisse gravida potenti hac vel ante.',
            shortDescription: 'short desc 5',
        },
        {
            label: 'Placeholder Resource 2',
            url: 'https://resource2.com',
            description:
                '...this is another resourse... ): . Odio conubia semper facilisis habitant ad senectus venenatis elit. Pellentesque tristique imperdiet suscipit urna, convallis facilisis cursus. Ut nisl taciti est primis in; vivamus interdum cursus. Neque imperdiet amet ac natoque placerat suscipit cursus. Sit tellus ornare aptent aliquet eleifend placerat aenean nunc himenaeos. Non posuere non elementum, per condimentum himenaeos luctus. Morbi tortor sagittis nec dignissim venenatis. Ultrices interdum enim nulla, convallis dui semper condimentum. Risus luctus at felis parturient cubilia in; at vel.',
            shortDescription: 'short desc 6',
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
            id="links"
        >
            {/* Yes this is terrible ik already, but it's 2am and I just don't care anymore (btw this is refering to the -3rem) */}

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    color: '#ffffff',
                }}
            >
                Useful Links
            </Typography>
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

export default Links;
