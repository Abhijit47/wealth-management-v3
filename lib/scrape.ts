'use server';

import * as cheerio from 'cheerio';
import * as fs from 'fs/promises';
import { join } from 'path';

type TestimonialType = {
  id: string;
  message: string;
  name: string;
  designation?: string;
  image: string;
  rating: number;
  createdAt: string;
};

export async function scrapeLocalHTML() {
  const filePath = join(process.cwd(), 'docs', 'testimonial.html');
  const buffer = await fs.readFile(filePath);
  const html = buffer.toString('utf-8');
  const $ = cheerio.load(html);
  // const $ = cheerio.load(sampleHtml);

  const testimonials: TestimonialType[] = [];

  // extract testimonial data
  // owner = Ascent Wealth, AMFI registered Mutual Funds Distributor, Chennai (ARN-109866) take only customers reviews
  $('.J7elmb.bc99Ed.mL6HXe.B6QZN').each((_, element) => {
    const message = $(element)
      .find('.gyKkFe.JhRJje.Fv38Af div[jsname="PBWx0c"]')
      .text()
      .trim();
    const name = $(element).find('.N0c6q.JhRJje a.PskQHd.jEgW2b').text().trim();
    const designation = $(element).find('.PROnRd.vq72z').first().text().trim();
    const image = $(element).find('.ooGZkf').attr('src') || '';
    const ratingText =
      $(element).find('span[role="img"]').attr('aria-label') ||
      '0 out of 5 stars';
    const dateText = $(element)
      .find('.dGCoId.gyKkFe.vq72z .KEfuhb')
      .text()
      .trim();
    const createdAt = dateText;
    const rating = parseInt(ratingText.split(' ')[0], 10);
    const id = crypto.randomUUID();

    // Push only complete reviews
    if (name && rating > 0) {
      testimonials.push({
        id,
        message,
        name,
        designation,
        image,
        rating,
        createdAt,
      });
    }
  });

  await fs.writeFile(
    join(process.cwd(), 'lib', 'testimonials.json'),
    JSON.stringify(testimonials, null, 2)
  );

  // const rawData = await fs.readFile(
  //   join(process.cwd(), 'lib', 'testimonials.json'),
  //   'utf-8'
  // );
  // const data = JSON.parse(rawData);
  // console.log('Scraped Testimonials:', data.length);

  return testimonials;
}
