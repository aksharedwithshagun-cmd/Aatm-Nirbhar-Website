import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

const slides = [
  {
    headline: 'Wherever the night takes you,', subheadline: 'it starts with chai.', cta: 'Explore Our Menu', ctaLink: '#full-menu',
    bg: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=1600&q=80',
  },
  {
    headline: 'Pure vegetarian.', subheadline: 'Purely delicious.', cta: 'Order Online', ctaLink: '#order',
    bg: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80',
  },
  {
    headline: 'The freshest flavors,', subheadline: 'served when you need them.', cta: 'Visit Us Tonight', ctaLink: '#locations',
    bg: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=1600&q=80',
  },
  {
    headline: "You've got the crew,", subheadline: "we'll handle the food.", cta: 'Reserve a Table', ctaLink: '#reserve',
    bg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
  },
]

const fullMenu = [
  { category: 'Mexican Specials', items: [{ name: 'Mexican Hot Pot', price: '₹445' }, { name: 'Mexican Fajita', price: '₹445' }, { name: 'Mexican Tacos', price: '₹365' }] },
  { category: 'Soups', items: [{ name: 'Tomato Soup', price: '₹200' }, { name: 'Hot N Sour Soup', price: '₹235' }, { name: 'Manchow Soup', price: '₹325' }, { name: 'Broccoli Almond Soup', price: '₹260' }, { name: 'Lemon Coriander Soup', price: '₹260' }, { name: 'Mexican Tortilla Soup', price: '₹260' }, { name: 'Naughty Pesto Soup', price: '₹260' }, { name: 'Chilli Beans Soup', price: '₹260' }, { name: 'Cream Of Mushroom Soup', price: '₹285' }] },
  { category: 'Starters', items: [{ name: 'Pesto Paneer', price: '₹415' }, { name: 'Manchurian Dry', price: '₹260' }, { name: 'Veg Crispy', price: '₹390' }, { name: 'Paneer Chilli Dry', price: '₹390' }, { name: 'Paneer Manchurian Dry', price: '₹415' }, { name: 'Chilli Crispy Mushroom Dry', price: '₹415' }] },
  { category: 'Main Course', items: [{ name: 'Manchurian Gravy', price: '₹325' }, { name: 'Paneer Chilli Gravy', price: '₹415' }, { name: 'Paneer Manchurian Gravy', price: '₹445' }] },
  { category: 'Rice', items: [{ name: 'Veg Pulao', price: '₹260' }, { name: 'Cheese Veg Pulao', price: '₹325' }, { name: 'Paneer Pulao', price: '₹350' }, { name: 'Corn Paneer Pulao', price: '₹365' }] },
  { category: 'Fried Rice & Noodles', items: [{ name: 'Manchurian Fried Rice', price: '₹315' }, { name: 'Paneer Fried Rice', price: '₹365' }, { name: 'Paneer Manchurian Fried Rice', price: '₹390' }, { name: 'Triple Fried Rice With Curry', price: '₹445' }] },
  { category: 'Pizza & Pasta', items: [{ name: 'Indian Tadka Pasta', price: '₹390' }, { name: 'Arrabiata Pasta', price: '₹415' }, { name: 'Alfredo Pasta', price: '₹450' }, { name: 'Creamy Pesto Pasta', price: '₹520' }] },
  { category: 'Burgers', items: [{ name: 'Veg Cheese Burger', price: '₹195' }, { name: 'Chilli Garlic Burger', price: '₹210' }, { name: 'Spicy Schezwan Paneer Burger', price: '₹245' }, { name: 'Peri Peri Paneer Burger', price: '₹260' }] },
  { category: 'Sandwiches', items: [{ name: 'Veg Sandwich', price: '₹155' }, { name: 'Veg Grilled Sandwich', price: '₹195' }, { name: 'Cheese Jam Sandwich', price: '₹180' }, { name: 'Chocolate Cheese Sandwich', price: '₹195' }, { name: 'Rabdi Cheese Sandwich', price: '₹220' }, { name: 'Cheese Chutney Sandwich', price: '₹185' }, { name: 'Cheese Chutney Grilled Sandwich', price: '₹220' }, { name: 'Veg Cheese Sandwich', price: '₹195' }, { name: 'Veg Cheese Grilled Sandwich', price: '₹235' }, { name: 'Veg Fantasy Grilled Sandwich', price: '₹260' }, { name: 'Mexican Grilled Sandwich', price: '₹285' }, { name: 'Schezwan Paneer Grilled Sandwich', price: '₹285' }, { name: 'Tandoori Paneer Grilled Sandwich', price: '₹285' }, { name: 'Cheese Corn Paneer Grilled Sandwich', price: '₹285' }] },
  { category: 'Club Sandwiches', items: [{ name: 'Tangi Peri Peri Club Sandwich', price: '₹390' }, { name: 'Paneer Takatak Club Sandwich', price: '₹415' }, { name: 'Bahubali Club Sandwich', price: '₹445' }, { name: 'ANC Special Club Sandwich', price: '₹445' }] },
  { category: 'Snacks', items: [{ name: 'Butter Maska Bun', price: '₹80' }, { name: 'Jam Maska Bun', price: '₹105' }, { name: 'Chocolate Maska Bun', price: '₹130' }, { name: 'Rabdi Maska Bun', price: '₹155' }, { name: 'Only Bhaji', price: '₹260' }, { name: 'Thai Corn Cheese Balls', price: '₹415' }, { name: 'Cocktail Tacos', price: '₹325' }, { name: 'Jalapeno Cheese Balls', price: '₹390' }, { name: 'Chipotle Burrito', price: '₹390' }, { name: 'Veg Spring Roll', price: '₹365' }, { name: 'Crispy Corn', price: '₹390' }, { name: 'Chinese Bhel', price: '₹325' }] },
  { category: 'Chaat', items: [{ name: 'Sev Puri', price: '₹155' }, { name: 'Chutney Puri', price: '₹155' }, { name: 'Dahi Puri', price: '₹170' }, { name: 'Bhel', price: '₹170' }, { name: 'Solid Masti Bhel', price: '₹170' }, { name: 'Cheese Bhel', price: '₹220' }] },
  { category: 'Nachos', items: [{ name: 'Classic Nachos', price: '₹325' }, { name: 'Loaded Nachos', price: '₹365' }, { name: 'Mexican Nachos', price: '₹390' }, { name: 'Tandoori Paneer Nachos', price: '₹415' }, { name: 'ANC Special Nachos', price: '₹415' }] },
  { category: 'Toasties', items: [{ name: 'Cheese Garlic Bread', price: '₹235' }, { name: 'Loaded Garlic Bread', price: '₹260' }, { name: 'Mexican Cheese Garlic Bread', price: '₹285' }, { name: 'Cheese Chilli Garlic Bread', price: '₹285' }, { name: 'Paprika Toast', price: '₹285' }, { name: 'Peri Peri Paneer Tikka Toast', price: '₹315' }, { name: 'Four Cheese Toast', price: '₹315' }] },
  { category: 'Fries', items: [{ name: 'Salted Fries', price: '₹220' }, { name: 'Peri Peri Fries', price: '₹260' }, { name: 'So Cheesy Fries', price: '₹325' }, { name: 'Loaded Fries', price: '₹350' }] },
  { category: 'Maggi', items: [{ name: 'Tadka Maggi', price: '₹180' }, { name: 'Tadka Veg Maggi', price: '₹210' }, { name: 'ANC Special Maggi', price: '₹235' }] },
  { category: 'Rolls', items: [{ name: 'Thai Roll', price: '₹325' }, { name: 'Mexican Roll', price: '₹325' }, { name: 'Paper Cheese Corn Roll', price: '₹325' }, { name: 'Chinese Cigar Roll', price: '₹325' }] },
  { category: 'Frankies', items: [{ name: 'Bombay Veg Frankie', price: '₹235' }, { name: 'Paneer Chilli Frankie', price: '₹260' }, { name: 'Mexican Frankie', price: '₹260' }, { name: 'Spicy Schezwan Frankie', price: '₹260' }, { name: 'ANC Special Frankie', price: '₹285' }] },
  { category: 'Accompaniments', items: [{ name: 'Roasted Papad', price: '₹50' }, { name: 'Masala Papad', price: '₹105' }, { name: 'Masala Cheese Papad', price: '₹155' }, { name: 'Curd', price: '₹65' }] },
  { category: 'Cold Beverages', items: [{ name: 'Classic Cold Coffee', price: '₹220' }, { name: 'Cold Bournvita', price: '₹220' }, { name: 'Iced Americano', price: '₹220' }, { name: 'Oreo Coffee', price: '₹260' }, { name: 'Cold Coco', price: '₹260' }, { name: 'Mocha Coffee', price: '₹285' }, { name: 'Vanilla Coffee', price: '₹285' }, { name: 'Popcorn Coffee', price: '₹285' }, { name: 'Hazelnut Cold Coffee', price: '₹285' }, { name: 'Caramel Coffee', price: '₹285' }, { name: 'Tiramisu Coffee', price: '₹315' }, { name: 'KitKat Coffee', price: '₹315' }, { name: 'Lemon Tea [450 Ml]', price: '₹195' }, { name: 'Peach Tea [450 Ml]', price: '₹195' }, { name: 'Curacao Tea [450 Ml]', price: '₹195' }, { name: 'Blueberry Tea [450 Ml]', price: '₹210' }, { name: 'Watermelon Tea [450 Ml]', price: '₹210' }, { name: 'Orange Tea [450 Ml]', price: '₹210' }, { name: 'Kiwi Tea [450 Ml]', price: '₹210' }, { name: 'Black Current Tea [450 Ml]', price: '₹210' }] },
  { category: 'Hot Beverages', items: [{ name: 'Espresso Shot [250 Ml]', price: '₹130' }, { name: 'Hot Coffee [250 Ml]', price: '₹155' }, { name: 'Black Coffee [250 Ml]', price: '₹155' }, { name: 'Americano Coffee [250 Ml]', price: '₹155' }, { name: 'Elaichi Coffee [250 Ml]', price: '₹180' }, { name: 'Classic Hot Chocolate [250 Ml]', price: '₹195' }, { name: 'Hot Bournvita [250 Ml]', price: '₹195' }, { name: 'Cappuccino [250 Ml]', price: '₹195' }, { name: 'Affogato Coffee [250 Ml]', price: '₹195' }, { name: 'Cafe Latte [250 Ml]', price: '₹210' }, { name: 'Cafe Mocha Coffee [250 Ml]', price: '₹220' }, { name: 'Hazelnut Coffee [250 Ml]', price: '₹235' }, { name: 'Kulhad Chai [120 Ml]', price: '₹65' }, { name: 'Chocolate Chai [120 Ml]', price: '₹90' }, { name: 'Disco Chai [120 Ml]', price: '₹105' }, { name: 'Green Tea [120 Ml]', price: '₹105' }, { name: 'ANC Special Tea [120 Ml]', price: '₹130' }] },
  { category: 'Juices', items: [{ name: 'Watermelon Juice [350 Ml]', price: '₹210' }, { name: 'Pineapple Juice [350 Ml]', price: '₹235' }, { name: 'Orange Juice [350 Ml]', price: '₹260' }] },
  { category: 'Shakes', items: [{ name: 'Butterscotch Shake [450 Ml]', price: '₹260' }, { name: 'Strawberry Shake [450 Ml]', price: '₹260' }, { name: 'Chocolate Shake [450 Ml]', price: '₹260' }, { name: 'Cookies And Cream Shake [450 Ml]', price: '₹285' }, { name: 'Berry Berry Shake [450 Ml]', price: '₹300' }, { name: 'Oreo Shake [450 Ml]', price: '₹300' }, { name: 'KitKat Shake [450 Ml]', price: '₹325' }, { name: 'Bubble Gum Shake [450 Ml]', price: '₹325' }, { name: 'Ferrero Rocher Shake [450 Ml]', price: '₹365' }, { name: 'Nutella Shake [450 Ml]', price: '₹365' }, { name: 'Brownie Shake [450 Ml]', price: '₹390' }, { name: 'Lotus Biscoff Shake [450 Ml]', price: '₹390' }] },
  { category: 'Other Drinks', items: [{ name: 'Red Bull Coffee', price: '₹270' }, { name: 'Chaas', price: '₹100' }] },
  { category: 'Mojitos', items: [{ name: 'Lemonade Mojito [450 Ml]', price: '₹170' }, { name: 'Lemon Mint Mojito [450 Ml]', price: '₹195' }, { name: 'Green Apple Mojito [450 Ml]', price: '₹210' }, { name: 'Watermelon Mojito [450 Ml]', price: '₹210' }, { name: 'Orange Mojito [450 Ml]', price: '₹210' }, { name: 'Raspberry Mojito [450 Ml]', price: '₹210' }, { name: 'Cranberry Mojito [450 Ml]', price: '₹210' }, { name: 'Blue Lagoon Mojito [450 Ml]', price: '₹220' }, { name: 'Black Current Mojito [450 Ml]', price: '₹220' }, { name: 'Blueberry Mojito [450 Ml]', price: '₹220' }, { name: 'Kiwi Mojito [450 Ml]', price: '₹220' }, { name: 'Watermelon Red Bull Mojito', price: '₹280' }] },
]

const LOGO_URL = 'https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/116508310_603454713646664_9161327111214446888_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby44MDAuYzIifQ&_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2gHTeD4CaIpUwadCSJZDIdsE4YZMoSSwUQ9fRp72wagpkji8JLTkGjT12tmUIPqmOHhiM7yGVDTpkqVSFBWVQoct&_nc_ohc=Wihj1uZef1gQ7kNvwHDXigX&_nc_gid=eBdMbuzgikIqr4zi3l-ImA&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af-FMFbiLI9ghY72mWoW4aiKgf_CjF4xoUgaRmNGxMo5Aw&oe=6A25719D&_nc_sid=22de04'

const featuredItems = [
  { name: 'Cold Coffee', desc: 'Rich, creamy and perfectly chilled.', price: '₹220', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80' },
  { name: 'Mexican Roll', desc: 'Spiced veggies in a soft tortilla.', price: '₹325', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80' },
  { name: 'ANC Special Maggi', desc: 'Street-style Maggi, loaded with flavour.', price: '₹235', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80' },
  { name: 'Paneer Tikka Sandwich', desc: 'Tandoori paneer, grilled to perfection.', price: '₹285', img: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80' },
  { name: 'Garlic Cheese Bread', desc: 'Buttery, garlicky, golden.', price: '₹235', img: 'https://images.unsplash.com/photo-1559304822-5f8b1d3a1b7f?w=400&q=80' },
  { name: 'So Cheesy Fries', desc: 'Crispy, cheesy, impossible to stop.', price: '₹325', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80' },
  { name: 'Hot Chocolate', desc: 'Velvety and warming.', price: '₹195', img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80' },
  { name: 'Triple Fried Rice', desc: 'Loaded with curry and flavour.', price: '₹445', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80' },
]

const locations = [
  { name: 'Mumatpura', address: 'Arose Restaurant near, Mumatpura Rd, Ahmedabad 380058', hours: 'Opens 1 PM', phone: '', map: 'https://maps.google.com/?q=Mumatpura+Ahmedabad' },
  { name: 'Ambli / Sarkhej', address: '544/1, Opp. Tika Taka Sports Arena, Off Karnavati Club Rd', hours: 'Opens 4:30 PM', phone: '+91 99799 01682', map: 'https://maps.google.com/?q=Karnavati+Club+Road+Ahmedabad' },
  { name: 'Bodakdev', address: 'Shop 1, Service Lane, Opp. Rajpath Club, Bodakdev', hours: 'Opens 4 PM', phone: '', map: 'https://maps.google.com/?q=Bodakdev+Ahmedabad' },
  { name: 'Bopal', address: 'New West Zone, YMC Road, Near Mumatpura Road, Bopal', hours: 'Opens 4:30 PM', phone: '+91 99043 18864', map: 'https://maps.google.com/?q=Bopal+Ahmedabad' },
  { name: 'Gandhinagar', address: 'Branch details coming soon.', hours: 'Coming Soon', phone: '', map: 'https://maps.google.com/?q=Gandhinagar' },
]

const reviews = [
  { stars: 5, text: '"Ambience is great — street-side cafe with good night vibes. A perfect place to sit and chill."', author: 'Google Review' },
  { stars: 5, text: '"Cold coffee is very good! Hot chocolate is great too. Atmosphere is 5/5."', author: 'Shreya, Google' },
  { stars: 4, text: '"Been here a few times late night. Fried Rice and Paneer Chilly Gravy are both good."', author: 'Ashutosh Yadav, Google' },
  { stars: 4, text: '"Affordable for what you get. Nice place with an enjoyable, cozy atmosphere."', author: 'Restaurant Guru Visitor' },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
  'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80',
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&q=80',
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
  'https://images.unsplash.com/photo-1489533119214-1e8cd9e2e97f?w=400&q=80',
]

const WA_NUMBER = '919979901682'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [navScrolled, setNavScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [orderModalOpen, setOrderModalOpen] = useState(false)
  const [activeMenuTab, setActiveMenuTab] = useState(fullMenu[0].category)
  const slideTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const startSlideTimer = () => {
    if (slideTimerRef.current) clearInterval(slideTimerRef.current)
    slideTimerRef.current = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 4000)
  }

  useEffect(() => {
    startSlideTimer()
    return () => { if (slideTimerRef.current) clearInterval(slideTimerRef.current) }
  }, [])

  const goToSlide = (idx: number) => { setCurrentSlide(idx); startSlideTimer() }
  const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % slides.length); startSlideTimer() }
  const prevSlide = () => { setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); startSlideTimer() }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') }) },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOrderModalOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const currentMenuCategory = fullMenu.find((c) => c.category === activeMenuTab) || fullMenu[0]

  return (
    <div className="min-h-screen bg-brand-cream text-brand-black font-sans overflow-x-hidden">

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Navigation */}
      <nav className={`nav-bar fixed top-0 left-0 right-0 z-40 px-4 md:px-8 lg:px-12 bg-brand-green ${navScrolled ? 'scrolled' : ''}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between py-3 md:py-4">
          <a href="#" className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Aatm Nirbhar Cafe" className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border-2 border-brand-orange shrink-0" />
            <div className="flex flex-col">
              <span className="font-serif text-base md:text-lg font-bold tracking-tight text-white leading-tight">Aatm Nirbhar <span className="text-brand-orange">Cafe</span></span>
              <span className="text-[10px] md:text-xs text-white/60 tracking-wider uppercase italic leading-tight">Sip. Eat. Repeat.</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-white/90">
            <a href="#full-menu-list" className="hover:text-brand-orange transition-colors py-1">Menu</a>
            <a href="#locations" className="hover:text-brand-orange transition-colors py-1">Locations</a>
            <button onClick={() => setOrderModalOpen(true)} className="hover:text-brand-orange transition-colors py-1">Order Online</button>
            <a href="#about" className="hover:text-brand-orange transition-colors py-1">About Us</a>
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="bg-brand-orange text-white px-5 py-2 rounded text-sm font-semibold hover:bg-orange-light transition-colors">Reserve a Table</a>
            <a href="https://www.instagram.com/aatmnirbharcafe/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-orange transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-green border-t border-white/10 px-4 pb-5 pt-3 space-y-3 text-sm font-medium">
            <a href="#full-menu-list" className="block text-white hover:text-brand-orange" onClick={() => setMobileMenuOpen(false)}>Menu</a>
            <a href="#locations" className="block text-white hover:text-brand-orange" onClick={() => setMobileMenuOpen(false)}>Locations</a>
            <button onClick={() => { setOrderModalOpen(true); setMobileMenuOpen(false) }} className="block text-white hover:text-brand-orange">Order Online</button>
            <a href="#about" className="block text-white hover:text-brand-orange" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-orange text-white px-5 py-2 rounded text-sm font-semibold" onClick={() => setMobileMenuOpen(false)}>Reserve a Table</a>
            <a href="https://www.instagram.com/aatmnirbharcafe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-brand-orange">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @aatmnirbharcafe
            </a>
          </div>
        )}
      </nav>

      {/* Order Modal */}
      {orderModalOpen && (
        <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => setOrderModalOpen(false)}>
          <div className="modal-content bg-white rounded-lg p-8 max-w-sm w-full text-center relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOrderModalOpen(false)} className="absolute top-3 right-3 text-gray-400 hover:text-brand-black">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="font-serif text-2xl font-bold text-brand-black mb-2">Order Online</h3>
            <p className="text-sm text-gray-500 mb-6">Get your favourites delivered straight to your door.</p>
            <div className="flex flex-col gap-3">
              <a href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3 rounded font-semibold text-sm hover:bg-orange-light transition-colors">🛵 Order on Swiggy</a>
              <a href="https://www.zomato.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-brand-green text-white px-6 py-3 rounded font-semibold text-sm hover:bg-brand-green/90 transition-colors">🍽️ Order on Zomato</a>
              <a href={`https://wa.me/${WA_NUMBER}?text=Hi! I'd like to place an order for delivery.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded font-semibold text-sm hover:bg-green-600 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Slideshow */}
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, idx) => (
          <div key={idx} className={`hero-fade absolute inset-0 transition-opacity duration-800 ${idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.bg})` }} />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
              <p className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl">{slide.headline}</p>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-white/80">{slide.subheadline}</p>
              <a href={slide.ctaLink} className="mt-8 inline-block bg-brand-orange px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-orange-light hover:scale-105">{slide.cta}</a>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white/60 hover:text-white transition-colors" aria-label="Previous slide">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white/60 hover:text-white transition-colors" aria-label="Next slide">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => goToSlide(idx)} className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-brand-orange' : 'w-2 bg-white/50 hover:bg-white/80'}`} aria-label={`Go to slide ${idx + 1}`} />
          ))}
        </div>
      </section>

      {/* About - Journey Panels */}
      <section id="about" className="section-reveal bg-brand-green py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">The Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2">How It All Began</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-brand-black rounded p-6 md:p-8 flex flex-col items-start">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shrink-0">1</div>
              <h3 className="font-serif text-xl font-bold text-brand-orange mb-3">When the travel industry came to halt...</h3>
              <p className="text-sm text-white/70 leading-relaxed">During the pandemic, our founder, <strong className="text-white">Girish Tekwani</strong>, decided to fulfill his long-time dream. That pause became the push that started the journey of creating Aatmnirbhar Cafe.</p>
            </div>
            <div className="bg-brand-black rounded p-6 md:p-8 flex flex-col items-start">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shrink-0">2</div>
              <h3 className="font-serif text-xl font-bold text-brand-orange mb-3">Name That Became Our Identity</h3>
              <p className="text-sm text-white/70 leading-relaxed">While shaping the brand, one word stood out: <strong className="text-white">Aatmnirbhar</strong> (self-reliant). Inspired by a powerful message from our Honorable PM, Shri Narendra Modi, the name is a reminder to stay bold &amp; independent.</p>
            </div>
            <div className="bg-brand-black rounded p-6 md:p-8 flex flex-col items-start">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shrink-0">3</div>
              <h3 className="font-serif text-xl font-bold text-brand-orange mb-3">From Small Setup to Big Mission</h3>
              <p className="text-sm text-white/70 leading-relaxed">With limited resources but limitless passion, we opened the first Aatmnirbhar Cafe in <strong className="text-white">Bodakdev, Ahmedabad</strong>. And from day one, our mission was clear: <em className="text-white/90">Serve great food with great vibes.</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="full-menu" className="section-reveal bg-brand-cream py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-black mt-2">Menu Highlights</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {featuredItems.map((item, idx) => (
              <div key={idx} className="menu-card rounded bg-white overflow-hidden cursor-pointer">
                <div className="h-44 md:h-48 overflow-hidden">
                  <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-brand-black">{item.name}</h3>
                    <span className="text-brand-orange font-bold text-sm">{item.price}</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#full-menu-list" className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-3 text-sm font-semibold uppercase tracking-widest transition-all hover:bg-brand-green/80">
              View Full Menu <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Full Menu */}
      <section id="full-menu-list" className="section-reveal bg-brand-black py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2">Full Menu</h2>
            <p className="mt-2 text-sm text-white/60">Everything 100% Pure Vegetarian 🌿</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {fullMenu.map((cat) => (
              <button key={cat.category} onClick={() => setActiveMenuTab(cat.category)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${activeMenuTab === cat.category ? 'bg-brand-orange text-white' : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}>
                {cat.category}
              </button>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-brand-orange mb-5 text-center">{currentMenuCategory.category}</h3>
            <div className="space-y-2">
              {currentMenuCategory.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-white/10 py-3">
                  <span className="text-white/90 text-sm md:text-base">{item.name}</span>
                  <span className="text-brand-orange font-bold text-sm ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <a href={`https://wa.me/${WA_NUMBER}?text=Hi! I'd like to order from Aatm Nirbhar Cafe.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-600 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="section-reveal bg-brand-green py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">Visit Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2">Find Us Near You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
            {locations.map((loc, idx) => (
              <div key={idx} className="location-card rounded bg-brand-black p-5 flex flex-col">
                <h3 className="font-serif font-bold text-brand-orange text-base mb-1">{loc.name}</h3>
                <p className="text-xs text-white/70 leading-relaxed flex-1">{loc.address}</p>
                {loc.phone && <p className="text-xs text-white/70 mt-1">{loc.phone}</p>}
                <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-brand-orange">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {loc.hours}
                </div>
                <a href={loc.map} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center justify-center gap-1.5 border border-brand-orange text-brand-orange text-xs font-semibold px-3 py-2 rounded hover:bg-brand-orange hover:text-white transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-reveal bg-brand-cream py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">Testimonials</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-black mt-2">What Our Guests Say</h2>
            <div className="mt-4 inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-2 rounded-full">
              <span className="text-white text-lg">⭐</span>
              <span className="font-bold text-white text-lg">4.1 / 5</span>
              <span className="text-white/80 text-sm">· 115 Google Reviews</span>
            </div>
          </div>
          <div className="review-scroll flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
            {reviews.map((review, idx) => (
              <div key={idx} className="review-card min-w-[280px] md:min-w-[300px] snap-start rounded bg-white p-6 flex flex-col shrink-0">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className={`w-4 h-4 ${star <= review.stars ? 'text-brand-orange' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 italic">{review.text}</p>
                <p className="mt-3 text-xs font-semibold text-brand-orange">— {review.author}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://www.google.com/search?q=Aatm+Nirbhar+Cafe+Ahmedabad+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-black transition-colors">
              Read More Reviews on Google <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Order Online Banner */}
      <section id="order" className="section-reveal py-14 md:py-20 px-4 md:px-8 lg:px-12" style={{ background: 'linear-gradient(to right, #FF6B00, #1B4D2E)' }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white">Hungry right now?</h2>
          <p className="mt-2 text-lg md:text-xl text-white/90">Order fresh from Aatm Nirbhar Cafe — delivered to your door.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-brand-orange hover:scale-105 rounded">🛵 Order on Swiggy</a>
            <a href="https://www.zomato.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-brand-green hover:scale-105 rounded">🍽️ Order on Zomato</a>
            <a href={`https://wa.me/${WA_NUMBER}?text=Hi! I'd like to place an order.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-green-600 hover:scale-105 rounded">💬 Order via WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="reserve" className="section-reveal bg-brand-cream py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">Gallery</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-black mt-2">Our Vibe</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {galleryImages.map((url, idx) => (
              <a key={idx} href="https://www.instagram.com/aatmnirbharcafe/" target="_blank" rel="noopener noreferrer" className="gallery-tile relative block aspect-square rounded overflow-hidden">
                <img src={url} alt="Cafe vibe" className="h-full w-full object-cover" loading="lazy" />
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://www.instagram.com/aatmnirbharcafe/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-black transition-colors">
              Follow us on Instagram @aatmnirbharcafe <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white/80">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            <div>
              <a href="#" className="inline-flex items-center gap-2 font-serif text-xl font-bold text-brand-orange">☕ Aatm Nirbhar Cafe</a>
              <p className="mt-3 text-sm leading-relaxed text-white/50">सब कुछ Indian 🌿 Pure Vegetarian · Ahmedabad</p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {['Home', 'Menu', 'Locations', 'Reserve a Table', 'Order Online', 'About Us'].map((link) => (
                  <li key={link}>
                    <a href={link === 'Home' ? '/' : `#${link === 'Menu' ? 'full-menu' : link.toLowerCase().replace(/\s+/g, '')}`} className="text-white/50 hover:text-brand-orange transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-brand-orange shrink-0">📞</span><a href="tel:+919979901682" className="text-white/50 hover:text-brand-orange">+91 99799 01682</a></li>
                <li className="flex items-start gap-2"><span className="text-brand-orange shrink-0">📞</span><a href="tel:+919904318864" className="text-white/50 hover:text-brand-orange">+91 99043 18864</a></li>
                <li className="flex items-start gap-2"><span className="text-brand-orange shrink-0">📞</span><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-green-400">WhatsApp: +91 99799 01682</a></li>
                <li className="flex items-start gap-2"><span className="text-brand-orange shrink-0">📍</span><span className="text-white/50 leading-relaxed">544/1, Off Karnavati Club Road, Ahmedabad</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-orange shrink-0">📧</span><span className="text-white/50">hello@aatmnirbharcafe.in</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">Order &amp; Follow</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-brand-orange transition-colors">🛵 Swiggy</a></li>
                <li><a href="https://www.zomato.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-brand-orange transition-colors">🍽️ Zomato</a></li>
                <li><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-green-400 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Order
                </a></li>
                <li><a href="https://www.instagram.com/aatmnirbharcafe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-brand-orange transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram @aatmnirbharcafe
                </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 md:px-8 lg:px-12 py-5">
          <div className="mx-auto max-w-6xl text-center text-xs text-white/40">
            © 2025 Aatm Nirbhar Cafe. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}