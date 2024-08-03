import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `4px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '3px solid rgba(0, 0, 0, .125)',
}));


const AccordionList = [
    {
        question: "What is BlockBuster?",
        answer: [
            "BlockBuster is a streaming service that offers a wide variety of award-winning anime series, movies, OVAs, and more on thousands of internet-connected devices.",
            "BlockBuster is a streaming service that offers a wide variety of award-winning anime series, movies, OVAs, and more on thousands of internet-connected devices."
        ]
    },
    {
        question: "How much does BlockBuster cost?",
        answer: ["Watch BlockBuster on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70,000 ₫ to 260,000 ₫ a month. No extra costs, no contracts."]
    },
    {
        question: "Where can I watch?",
        answer: [
            "Watch anywhere, anytime. Sign in with your BlockBuster account to watch instantly on the web at blockbuster.com from your personal computer or on any internet-connected device that offers the Blockbuster app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            "You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take BlockBuster with you anywhere."
        ]
    },
    {
        question: "How do I cancel?",
        answer: [
            "Blockbuster is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        ]
    },
    {
        question: "What can I watch on BlockBuster?",
        answer: [
            "Blockbuster has an extensive library of feature anime TV shows, films and more. Watch as much as you want, anytime you want."
        ]
    },
    {
        question: "Is BlockBuster good for kids?",
        answer: [
            "The BlockBuster Kids experience is included in your membership to give parents control while kids enjoy family-friendly anime series and movies in their own space.",
            "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        ]
    }
]

export default function FAQ() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container maxWidth="xl" sx={{ my: 6 }}>
            {AccordionList.map((item, index) => {
                const panel = `panel${index+1}`
                return (<Accordion key={index} expanded={expanded === panel} onChange={handleChange(panel)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography variant='h5'>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.answer.map((line,id)=> { 
                            return <Typography sx={{
                                fontSize: "24px",
                                textAlign: "left",
                                my: 2
                            }} key={id} gutterBottom>{line}
                            </Typography>
                        })}
                    </AccordionDetails>
                </Accordion>)
            })}
        </Container>
    );
}

