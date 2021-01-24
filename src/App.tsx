import React from 'react';
import pic from './salt-cover.jpg';
import { Buttons } from './components/Buttons';
import { Image } from './components/Image';
import { Footer } from './components/Footer';
import './App.css';

const buttonsList: Array<Data> = [
  {
    hook: 'website',
    name: 'Website',
    site: '#'
  },
  {
    hook: 'bandcamp',
    name: 'BandCamp',
    site: 'https://saltpdx.bandcamp.com/'
  },
  {
    hook: 'facebook',
    name: 'Facebook',
    site: 'https://www.facebook.com/saltpdx'
  },
  {
    hook: 'instagram',
    name: 'Instagram',
    site: 'https://www.instagram.com/salt_pdx/'
  },
  {
    hook: 'youtube',
    name: 'Youtube',
    site: '#'
  },
  {
    hook: 'spotify',
    name: 'Spotify',
    site: 'https://open.spotify.com/artist/6vH8UISvwcCk0Rbd0UcCAe?si=kNnCyhbQS-SAuSckJ4NSkw'
  },
  {
    hook: 'apple-music',
    name: 'Apple Music',
    site: 'https://music.apple.com/us/album/bad-posture-single/1547596850'
  },
  {
    hook: 'contact',
    name: 'Contact',
    site: 'mailto:bookingsaltpdx@gmail.com'
  }
]

const title: string = 'Cool picture of SALT in nature'
const funnyGIF: string = 'https://www.reddit.com/r/aww/comments/l0bsvz/good_morning_3/?utm_source=share&utm_medium=web2x&context=3';
const footerText: string = 'SALT';

const App: React.FC = () => {
  console.log(`Oh hai there ${funnyGIF} Love Mike`)
  return (
      <div className='container'>
        <Image pic={pic} title={title} hook='salt-img' />
        <Buttons data={buttonsList} />
        <Footer text={footerText} hook='footer-text' />
      </div>
  );
}

export default App;
