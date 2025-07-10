import React from 'react';
import AppLayout from '../layouts/AppLayout';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Contact from '../sections/Contact/Contact';
import { Exprience } from '../sections/exprience/Exprience';
import Project from '../sections/Projects/Projects';

export default function AppRoutes() {
    return (
        <AppLayout>
            <Hero />
            <About />
            <Project />
            <Exprience />
            <Contact />
        </AppLayout>
    );
}
