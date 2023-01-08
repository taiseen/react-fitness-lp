import { ClassType } from '@/shared/types';
import images from "@/assets";

export const sectionName = [
    {
        id: 1,
        path: 'Home',
    },
    {
        id: 2,
        path: 'Benefits',
    },
    {
        id: 3,
        path: 'Our Classes',
    },
    {
        id: 4,
        path: 'Contact Us',
    },
]

export const contactFormData = [
    {
        id: 'name',
        type: 'text',
        element: 'input',
        placeholder: 'Your Name',
        required: true,
        maxLength: 100,
        error: {
            requiredInfo: 'This field is required.',
            maxLengthInfo: 'Max length is 100 char.',
        }
    },
    {
        id: 'email',
        type: 'email',
        element: 'input',
        placeholder: 'Email Address',
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        error: {
            requiredInfo: 'This field is required.',
            patternInfo: 'Invalid email address.',
        }
    },
    {
        id: 'message',
        element: 'textarea',
        placeholder: 'Your Message...',
        required: true,
        maxLength: 2000,
        error: {
            requiredInfo: 'This field is required.',
            maxLengthInfo: 'Max length is 2000 char.',
        }
    },
]

export const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: images.image1,
    },
    {
        name: "Yoga Classes",
        image: images.image2,
    },
    {
        name: "Ab Core Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: images.image3,
    },
    {
        name: "Adventure Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: images.image4,
    },
    {
        name: "Fitness Classes",
        image: images.image5,
    },
    {
        name: "Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: images.image6,
    },
];

export const commonAnimations = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.5 },
    variants: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
};