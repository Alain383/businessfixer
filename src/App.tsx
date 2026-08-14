/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { System } from './pages/System';
import { Book } from './pages/Book';
import { Bootcamp } from './pages/Bootcamp';
import { Assessment } from './pages/Assessment';
import { GenericPage } from './pages/GenericPage';
import { Mentoring } from './pages/Mentoring';
import { Workshops } from './pages/Workshops';
import { Advisory } from './pages/Advisory';
import { PropertyInvestment } from './pages/PropertyInvestment';
import { Blog } from './pages/Blog';
import { Media } from './pages/Media';
import { Gallery } from './pages/Gallery';
import { Podcast } from './pages/Podcast';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="system" element={<System />} />
          <Route path="book" element={<Book />} />
          <Route path="bootcamp" element={<Bootcamp />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="services" element={<GenericPage title="Services" type="services" />} />
          <Route path="services/mentoring" element={<Mentoring />} />
          <Route path="services/workshops" element={<Workshops />} />
          <Route path="services/advisory" element={<Advisory />} />
          <Route path="services/real-estate" element={<PropertyInvestment />} />
          <Route path="services/service-excellence" element={<GenericPage title="Service Excellence Consulting" type="generic" />} />
          <Route path="speaking" element={<GenericPage title="Speaking" type="speaking" />} />
          <Route path="media" element={<Media />} />
          <Route path="media/gallery" element={<Gallery />} />
          <Route path="testimonials" element={<GenericPage title="Testimonials" type="testimonials" />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<GenericPage title="Contact" type="contact" />} />
          <Route path="privacy" element={<GenericPage title="Privacy Policy" type="generic" />} />
          <Route path="terms" element={<GenericPage title="Terms & Conditions" type="generic" />} />
          <Route path="*" element={<GenericPage title="Page Not Found" type="404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
