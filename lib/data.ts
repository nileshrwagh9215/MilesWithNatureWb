export interface Trek {
  slug: string
  title: string
  location: string
  duration: string
  difficulty: "Easy" | "Moderate" | "Challenging" | "Extreme"
  altitude: string
  price: number
  image: string
  shortDescription: string
  description: string
  highlights: string[]
  itinerary: { day: number; title: string; description: string }[]
  bestSeason: string
  groupSize: string
  includes: string[]
  featured?: boolean
  upcoming?: boolean
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  category: string
}

export interface GalleryImage {
  src: string
  alt: string
  category: string
}

export interface Testimonial {
  name: string
  initials: string
  trek: string
  rating: number
  quote: string
}

export const treks: Trek[] = [
  {
    slug: "vasota-jungle-trek",
    title: "Vasota Jungle Trek",
    location: "Satara, Maharashtra",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    altitude: "3,842 ft",
    price: 2499,
    image: "/images/trek-vasota.jpg",
    shortDescription:
      "Explore the dense jungles of Koyna Wildlife Sanctuary with a thrilling boat ride across the Shivsagar Lake to reach the majestic Vasota Fort.",
    description:
      "The Vasota Jungle Trek is one of the most exciting monsoon treks in Maharashtra. Located deep inside the Koyna Wildlife Sanctuary in Satara district, this trek begins with a scenic boat ride across the vast Shivsagar Lake. The jungle trail passes through dense tropical forest teeming with wildlife, leading to the ancient Vasota Fort perched atop a mountain. From the fort, you get panoramic views of the Koyna backwaters and the surrounding Sahyadri ranges. This is a must-do trek for anyone who loves the raw beauty of the Western Ghats.",
    highlights: [
      "Scenic boat ride across Shivsagar Lake",
      "Dense jungle trail through Koyna Wildlife Sanctuary",
      "Panoramic views from Vasota Fort summit",
      "Rich biodiversity - chance to spot wildlife",
      "Night camping under the stars on the fort",
      "Historical Maratha fort architecture",
    ],
    itinerary: [
      {
        day: 1,
        title: "Pune to Bamnoli - Boat Ride & Jungle Trek",
        description:
          "Early morning departure from Pune. Reach Bamnoli village by 9 AM. Board the boat for a scenic 1.5 hr ride across Shivsagar Lake. Begin the jungle trek (approx. 6 km) through the Koyna sanctuary. Reach Vasota Fort by afternoon. Explore the fort, enjoy sunset views. Night camping and bonfire.",
      },
      {
        day: 2,
        title: "Fort Exploration & Return",
        description:
          "Early morning sunrise from the fort. Explore the fort bastions, water cisterns, and temple ruins. Descend through the jungle trail back to the lake. Boat ride back to Bamnoli. Drive back to Pune by evening.",
      },
    ],
    bestSeason: "October to February",
    groupSize: "15-25 people",
    includes: [
      "Transport from Pune and back",
      "Boat ride charges",
      "All meals (dinner, breakfast, lunch)",
      "Camping equipment & tents",
      "Experienced trek leader & local guides",
      "First aid & safety equipment",
      "Forest entry permits",
    ],
    featured: true,
    upcoming: true,
  },
  {
    slug: "kalsubai-peak-trek",
    title: "Kalsubai Peak Trek",
    location: "Nashik, Maharashtra",
    duration: "1 Day",
    difficulty: "Moderate",
    altitude: "5,400 ft",
    price: 1299,
    image: "/images/trek-kalsubai.jpg",
    shortDescription:
      "Conquer the highest peak in Maharashtra with thrilling iron ladder sections and breathtaking 360-degree views of the Sahyadri ranges.",
    description:
      "Kalsubai Peak at 5,400 ft is the highest point in Maharashtra, often called the Everest of Maharashtra. Located in the Nashik district near the Bhandardara region, this trek is a fantastic challenge for both beginners and experienced trekkers. The trail features unique iron ladder and railing sections on steep rock patches, making it an exciting climb. From the summit, you are rewarded with stunning 360-degree panoramic views of the surrounding Sahyadri ranges, including views of Bhandardara Dam, Ratangad Fort, Alang-Madan-Kulang, and the lush green valleys below.",
    highlights: [
      "Highest peak in Maharashtra at 5,400 ft",
      "Thrilling iron ladder sections on steep rock",
      "360-degree panoramic Sahyadri views from summit",
      "Views of Bhandardara Lake and surrounding forts",
      "Kalsubai Devi temple at the summit",
      "Perfect for both beginners and experienced trekkers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Pune to Bari Village - Summit & Return",
        description:
          "Depart Pune early morning (4 AM). Reach Bari village base by 7 AM. Begin the ascent through the well-marked trail with iron ladder sections. Reach the summit by 10 AM. Enjoy panoramic views and visit the Kalsubai Devi temple. Descend by afternoon. Drive back to Pune by evening.",
      },
    ],
    bestSeason: "September to February",
    groupSize: "15-30 people",
    includes: [
      "Transport from Pune and back",
      "Breakfast and lunch",
      "Experienced trek leader",
      "First aid kit",
      "Entry charges",
    ],
    featured: true,
  },
  {
    slug: "harishchandragad-trek",
    title: "Harishchandragad Trek",
    location: "Ahmednagar, Maharashtra",
    duration: "2 Days / 1 Night",
    difficulty: "Challenging",
    altitude: "4,670 ft",
    price: 2199,
    image: "/images/trek-harishchandragad.jpg",
    shortDescription:
      "Visit the legendary Konkan Kada, one of the most dramatic cliff overhangs in the Sahyadris, on this thrilling fort trek.",
    description:
      "Harishchandragad is one of the most iconic forts in the Sahyadri range, famous for the breathtaking Konkan Kada - a massive vertical cliff with a concave overhang that drops over 3,000 feet. This ancient fort dates back to the 6th century and features remarkable caves, a Pushkarni (ancient water tank), and the Kedareshwar cave with a Shiva Linga surrounded by waist-deep water. The trek via Nalichi Vaat is considered one of the most thrilling and challenging routes, involving rock patches and steep climbs through dense forest.",
    highlights: [
      "Iconic Konkan Kada - one of the largest overhanging cliffs",
      "Kedareshwar Cave with Shiva Linga in water",
      "Ancient Pushkarni and Saptatirtha water tanks",
      "Thrilling Nalichi Vaat rock climbing route",
      "Night camping on the fort plateau",
      "Historical significance dating back to 6th century",
    ],
    itinerary: [
      {
        day: 1,
        title: "Pune to Khireshwar - Trek to Fort",
        description:
          "Depart Pune early morning. Reach Khireshwar village. Begin trek via Nalichi Vaat or Pachnai route. Ascend through dense forest and rock patches. Reach the fort by afternoon. Explore Kedareshwar cave and Pushkarni. Sunset at Konkan Kada. Night camping with bonfire and dinner.",
      },
      {
        day: 2,
        title: "Sunrise at Konkan Kada & Descent",
        description:
          "Early morning sunrise at Konkan Kada - an absolutely unforgettable experience. Explore remaining fort areas. Begin descent via Pachnai route. Reach base village by afternoon. Drive back to Pune.",
      },
    ],
    bestSeason: "September to February",
    groupSize: "15-25 people",
    includes: [
      "Transport from Pune and back",
      "All meals (dinner, breakfast, lunch)",
      "Camping equipment & tents",
      "Experienced trek leader & local guides",
      "First aid & safety equipment",
    ],
    featured: true,
  },
  {
    slug: "ratangad-fort-trek",
    title: "Ratangad Fort Trek",
    location: "Nashik, Maharashtra",
    duration: "1 Day",
    difficulty: "Moderate",
    altitude: "4,255 ft",
    price: 1499,
    image: "/images/trek-ratangad.jpg",
    shortDescription:
      "A gem in the Bhandardara region with a natural rock window, ancient fort ruins, and stunning views of the Sahyadri ranges and Amriteshwar lake.",
    description:
      "Ratangad Fort, located in the Nashik district near Bhandardara, is one of the most scenic forts in the Sahyadri range. The fort is renowned for its Nedhe (a natural window-like hole in the rock face) which offers a unique framing of the surrounding landscape. From the summit, you get spectacular views of Bhandardara Lake (Arthur Lake), Kalsubai Peak, Alang, Madan, Kulang, and the beautiful Sahyadri valleys. The trek starts from the charming Ratanwadi village, which is also home to the ancient Amriteshwar temple built in the Hemadpanthi style.",
    highlights: [
      "Famous Nedhe - natural rock window with stunning views",
      "Views of Bhandardara Lake and Kalsubai Peak",
      "Ancient Amriteshwar Temple at Ratanwadi village",
      "Spectacular Sahyadri panorama from summit",
      "Rich history and Maratha architecture",
    ],
    itinerary: [
      {
        day: 1,
        title: "Pune to Ratanwadi - Trek & Return",
        description:
          "Early morning departure from Pune. Reach Ratanwadi village. Visit the ancient Amriteshwar temple. Begin the trek through forest and rocky terrain. Reach the fort and explore the Nedhe, bastions, and water cisterns. Descend and drive back to Pune by evening.",
      },
    ],
    bestSeason: "September to February",
    groupSize: "15-25 people",
    includes: [
      "Transport from Pune and back",
      "Breakfast and lunch",
      "Experienced trek leader",
      "First aid kit",
    ],
  },
  {
    slug: "rajmachi-fort-trek",
    title: "Rajmachi Fort Trek",
    location: "Pune, Maharashtra",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    altitude: "2,710 ft",
    price: 1799,
    image: "/images/trek-rajmachi.jpg",
    shortDescription:
      "A perfect monsoon trek near Lonavala with twin forts Shrivardhan and Manaranjan, waterfalls, fireflies, and a rustic village stay.",
    description:
      "Rajmachi Fort is one of the most popular weekend treks near Pune and Mumbai. Located near Lonavala, this historical fort complex consists of two fortified peaks - Shrivardhan and Manaranjan. The trek from Kondivade village is especially magical during monsoon when the hills are lush green, hundreds of waterfalls cascade down the mountains, and the valley is filled with clouds. The Udhewadi village near the fort offers an authentic Maharashtrian rural experience with warm hospitality and home-cooked food. During the pre-monsoon months, the fort is famous for its stunning firefly festival.",
    highlights: [
      "Twin forts - Shrivardhan and Manaranjan",
      "Spectacular monsoon waterfalls and cloud views",
      "Authentic village homestay experience at Udhewadi",
      "Firefly season (May-June) is magical",
      "Easy trek suitable for beginners and families",
      "Close to Pune and Mumbai - perfect weekend getaway",
    ],
    itinerary: [
      {
        day: 1,
        title: "Pune to Kondivade - Trek to Udhewadi",
        description:
          "Depart Pune morning. Reach Kondivade village near Karjat. Begin the gradual trek (approx. 15 km) through villages and forest trail. Enjoy the waterfalls en route during monsoon. Reach Udhewadi village by evening. Home-cooked Maharashtrian dinner and bonfire.",
      },
      {
        day: 2,
        title: "Fort Exploration & Return",
        description:
          "Early morning trek to Shrivardhan and Manaranjan forts. Explore the bastions, gates, and enjoy panoramic views. Return to Udhewadi for breakfast. Trek back to Kondivade village. Drive back to Pune.",
      },
    ],
    bestSeason: "June to February",
    groupSize: "15-30 people",
    includes: [
      "Transport from Pune and back",
      "All meals (dinner, breakfast, lunch)",
      "Village homestay accommodation",
      "Experienced trek leader",
      "First aid kit",
    ],
  },
  {
    slug: "sandhan-valley-trek",
    title: "Sandhan Valley Trek",
    location: "Nashik, Maharashtra",
    duration: "2 Days / 1 Night",
    difficulty: "Challenging",
    altitude: "3,000 ft",
    price: 2299,
    image: "/images/gallery-3.jpg",
    shortDescription:
      "Descend into the Valley of Shadows - a narrow canyon with towering cliffs, rappelling sections, and water pools in the heart of the Sahyadris.",
    description:
      "Sandhan Valley, also known as the Valley of Shadows, is one of the most unique trekking experiences in the Sahyadri range. Located in the Nashik district near Bhandardara, this spectacular canyon features narrow passages between towering rock walls that reach up to 200 feet high. The trek involves descending into the valley through rappelling, rock climbing, swimming through water pools, and navigating through dark narrow passages. It is an adrenaline-pumping adventure that combines canyoneering with traditional trekking.",
    highlights: [
      "Descend into the Valley of Shadows canyon",
      "Rappelling down rock faces",
      "Swimming through natural water pools",
      "Towering 200 ft rock walls on both sides",
      "Night camping inside the valley",
      "One of the most unique treks in Maharashtra",
    ],
    itinerary: [
      {
        day: 1,
        title: "Pune to Samrad - Descend into Sandhan Valley",
        description:
          "Early morning departure from Pune. Reach Samrad village. Begin the descent into Sandhan Valley. Navigate through narrow passages, rock patches, and water pools. Rappelling at key sections. Reach the camping spot inside the valley. Night camping with bonfire.",
      },
      {
        day: 2,
        title: "Valley Exit & Return",
        description:
          "Continue through the remaining valley sections. Exit the valley at Dehne village. Drive back to Pune by evening.",
      },
    ],
    bestSeason: "October to May",
    groupSize: "15-20 people",
    includes: [
      "Transport from Pune and back",
      "All meals",
      "Rappelling and technical equipment",
      "Camping equipment",
      "Experienced trek leader & safety team",
      "First aid & safety equipment",
    ],
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: "monsoon-trekking-sahyadri-guide",
    title: "The Ultimate Guide to Monsoon Trekking in Sahyadri",
    excerpt:
      "Monsoon transforms the Sahyadris into a green paradise. Here is everything you need to know about trekking safely during the rains in Maharashtra.",
    content: `The monsoon season (June to September) transforms the Sahyadri mountains into a breathtaking green paradise with waterfalls at every turn. However, trekking during monsoon requires extra preparation and caution.

**Choosing the Right Trek**: Not all forts are safe during heavy rains. Forts like Rajmachi, Lohagad, and Visapur are excellent monsoon treks. Avoid technical treks like Sandhan Valley and Alang-Madan-Kulang during peak monsoon.

**Footwear**: Your regular sports shoes will not work on slippery Sahyadri rocks. Invest in good trekking shoes with excellent grip, or use reliable sandals with straps that drain water quickly.

**Rain Gear**: A good quality rain poncho is better than an umbrella. Carry dry bags for your phone, wallet, and extra clothes. Pack everything in waterproof bags inside your backpack.

**Leeches**: The Sahyadri forests are home to leeches during monsoon. Apply salt or tobacco on your shoes and socks. Carry salt in a small pouch for removing leeches if they attach.

**Hydration & Food**: Carry enough water as streams may be contaminated during rains. Pack energy bars, chikki, and dry fruits. Avoid eating at random roadside stalls.

**Safety**: Always trek in a group. Inform someone about your trek plan. Avoid standing near cliff edges - rocks can be extremely slippery. Start early and finish before dark.`,
    author: "Sachin Patil",
    date: "2025-12-15",
    image: "/images/trek-rajmachi.jpg",
    category: "Trek Guide",
  },
  {
    slug: "top-forts-nashik-district",
    title: "Top 10 Fort Treks in Nashik District You Must Do",
    excerpt:
      "From Kalsubai to Ratangad, the Nashik district in Maharashtra is home to some of the most spectacular fort treks in the Sahyadris.",
    content: `Nashik district, with the Bhandardara region at its heart, is a trekking paradise. Here are the top fort treks you absolutely must experience:

**1. Kalsubai (5,400 ft)**: The highest peak in Maharashtra. Iron ladders, stunning views, and the Kalsubai Devi temple at the summit.

**2. Ratangad (4,255 ft)**: Famous for the Nedhe (natural rock window). Amazing views of Bhandardara Lake.

**3. Harishchandragad (4,670 ft)**: The legendary Konkan Kada cliff and Kedareshwar cave make this an unforgettable trek.

**4. Alang (4,852 ft)**: One of the toughest treks in Sahyadri. Only for experienced trekkers with rock climbing skills.

**5. Madan (4,690 ft)**: Connected to Alang and Kulang, forming the famous AMK trio. Challenging and rewarding.

**6. Kulang (4,600 ft)**: The third in the AMK range. Technical climb required.

**7. Sandhan Valley**: The Valley of Shadows. A unique canyoneering experience.

**8. Bhairavgad**: A lesser-known gem with a challenging climb and peaceful atmosphere.

**9. Ghanchakkar (4,488 ft)**: Known as the most confusing fort due to its dense forest. Navigation skills essential.

**10. Aundha Fort**: Near Pabargad, offers beautiful views of the surrounding Sahyadri ranges.

The Bhandardara and Igatpuri regions in Nashik are easily accessible from both Pune and Mumbai, making them perfect for weekend adventures.`,
    author: "Priya Deshmukh",
    date: "2025-11-28",
    image: "/images/trek-kalsubai.jpg",
    category: "Destination Guide",
  },
  {
    slug: "leave-no-trace-sahyadri",
    title: "Leave No Trace: Responsible Trekking in the Sahyadris",
    excerpt:
      "Our Sahyadri forts and mountains are precious heritage. Learn how to trek responsibly and preserve them for future generations.",
    content: `The Sahyadri mountains are not just geological formations - they are our cultural heritage, home to hundreds of Maratha forts and unique ecosystems. As trekkers, we have a responsibility to preserve them.

**Pack It In, Pack It Out**: Every wrapper, bottle, and tissue you carry to the mountain must come back with you. The plastic pollution on popular forts like Rajmachi and Harishchandragad is alarming.

**Respect the Forts**: These are historical monuments. Never carve names or paint on fort walls. Do not damage any structures. Do not remove stones or artifacts.

**Campfire Responsibility**: Use existing fire pits. Never start fires near dry vegetation. In forests like Koyna sanctuary, campfires may be restricted - follow the rules.

**Water Sources**: Many forts have ancient water cisterns (tanks) that local villages still depend on. Do not contaminate them with soap or waste.

**Wildlife**: The Western Ghats are a biodiversity hotspot. Do not disturb wildlife. Keep noise levels low in forest areas. Do not feed animals.

**Support Local Communities**: Buy provisions from local villages. Stay in village homestays when possible. Respect local customs and festivals.

**Carry a Trash Bag**: Go one step further - pick up trash left by others. Many trekking groups in Maharashtra now organize fort cleanup drives. Join one!

Together, we can ensure that these magnificent Sahyadri forts remain pristine for generations to come.`,
    author: "Amit Kulkarni",
    date: "2025-11-10",
    image: "/images/trek-harishchandragad.jpg",
    category: "Environment",
  },
]

export const galleryImages: GalleryImage[] = [
  { src: "/images/hero-mountain.jpg", alt: "Sahyadri mountain range panorama during monsoon", category: "Mountains" },
  { src: "/images/trek-vasota.jpg", alt: "Vasota Fort jungle trail through Koyna sanctuary", category: "Forts" },
  { src: "/images/trek-kalsubai.jpg", alt: "Kalsubai Peak - highest point in Maharashtra", category: "Mountains" },
  { src: "/images/trek-harishchandragad.jpg", alt: "Konkan Kada cliff at Harishchandragad", category: "Forts" },
  { src: "/images/trek-ratangad.jpg", alt: "Ratangad Fort with Bhandardara lake views", category: "Forts" },
  { src: "/images/trek-rajmachi.jpg", alt: "Rajmachi Fort in the monsoon", category: "Forts" },
  { src: "/images/gallery-1.jpg", alt: "Sunset from a Sahyadri mountain fort", category: "Sunsets" },
  { src: "/images/gallery-2.jpg", alt: "Campsite on Sahyadri fort plateau", category: "Camping" },
  { src: "/images/gallery-3.jpg", alt: "Waterfall cascading down Sahyadri cliff", category: "Waterfalls" },
  { src: "/images/gallery-4.jpg", alt: "Ancient Maratha fort entrance gate", category: "Forts" },
  { src: "/images/gallery-5.jpg", alt: "Koyna backwaters surrounded by green hills", category: "Lakes" },
  { src: "/images/about-team.jpg", alt: "Miles With Nature trekking team", category: "Team" },
]

export const testimonials: Testimonial[] = [
  {
    name: "Sachin Jadhav",
    initials: "SJ",
    trek: "Vasota Jungle Trek",
    rating: 5,
    quote: "The boat ride to Vasota was absolutely magical. The jungle trail was thrilling, and camping on the fort under the stars was an experience I will never forget. Best trekking group in Pune!",
  },
  {
    name: "Pooja Kulkarni",
    initials: "PK",
    trek: "Kalsubai Peak Trek",
    rating: 5,
    quote: "Reaching the highest point in Maharashtra was a dream come true. The iron ladder sections were exciting and the views from the top were breathtaking. The team was very supportive throughout.",
  },
  {
    name: "Aditya Deshmukh",
    initials: "AD",
    trek: "Harishchandragad Trek",
    rating: 5,
    quote: "Konkan Kada at sunrise is something every Maharashtrian must witness. The Nalichi Vaat route was challenging but our trek leader made sure everyone was safe. Incredible experience!",
  },
  {
    name: "Sneha Patil",
    initials: "SP",
    trek: "Rajmachi Fort Trek",
    rating: 5,
    quote: "Perfect monsoon trek! The waterfalls, the green valleys, and the village homestay at Udhewadi were amazing. The home-cooked food was delicious. Highly recommend for beginners!",
  },
  {
    name: "Omkar Bhosale",
    initials: "OB",
    trek: "Sandhan Valley Trek",
    rating: 5,
    quote: "The Valley of Shadows lived up to its name. Rappelling down the rock face and swimming through the pools was pure adrenaline. Miles With Nature made it safe and fun!",
  },
  {
    name: "Rutuja Shinde",
    initials: "RS",
    trek: "Ratangad Fort Trek",
    rating: 5,
    quote: "The Nedhe at Ratangad was a highlight. The views of Bhandardara lake from the summit were stunning. Very well organized trek with a great group of people.",
  },
  {
    name: "Tejas Gaikwad",
    initials: "TG",
    trek: "Vasota Jungle Trek",
    rating: 4,
    quote: "Amazing experience trekking through the dense Koyna jungle. The boat ride was scenic and the camping was well arranged. Would definitely join again for another trek!",
  },
  {
    name: "Manasi Deshpande",
    initials: "MD",
    trek: "Kalsubai Peak Trek",
    rating: 5,
    quote: "As a first-time trekker, I was nervous about the ladders, but the guides were so encouraging. Standing on the highest peak in Maharashtra gave me such a sense of achievement!",
  },
  {
    name: "Rajesh Pawar",
    initials: "RP",
    trek: "Harishchandragad Trek",
    rating: 5,
    quote: "I have trekked with many groups but Miles With Nature stands out for their safety standards and warm hospitality. The Kedareshwar cave was a spiritual experience.",
  },
  {
    name: "Priyanka Mahajan",
    initials: "PM",
    trek: "Rajmachi Fort Trek",
    rating: 5,
    quote: "The firefly season trek to Rajmachi was absolutely enchanting. Thousands of fireflies lighting up the dark forest was like walking through a fairy tale. Unforgettable!",
  },
  {
    name: "Aniket Joshi",
    initials: "AJ",
    trek: "Sandhan Valley Trek",
    rating: 5,
    quote: "This was the most adventurous trek I have ever done. The narrow canyon, the rappelling, the water pools - everything was thrilling. Safety was top-notch. A must-do!",
  },
  {
    name: "Sanika Thakur",
    initials: "ST",
    trek: "Vasota Jungle Trek",
    rating: 5,
    quote: "Vasota is a hidden gem in the Sahyadris. The boat ride, the jungle sounds, the fort history - everything was perfect. The food arrangements were excellent too!",
  },
]

export const safetyTips = [
  {
    title: "Check Weather & Trail Conditions",
    description:
      "Maharashtra's Western Ghats can experience sudden weather changes, especially during monsoon. Always check the weather forecast and trail conditions before starting. Avoid trekking during heavy rainfall warnings.",
    icon: "cloud",
  },
  {
    title: "Stay Hydrated",
    description:
      "Carry at least 2-3 liters of water per person. Sahyadri treks can be hot and humid. Dehydration reduces your physical performance and increases the risk of heat exhaustion.",
    icon: "droplets",
  },
  {
    title: "Wear Proper Footwear",
    description:
      "Sahyadri rocks can be extremely slippery, especially during monsoon. Invest in good quality trekking shoes with excellent grip. Avoid wearing regular sports shoes or slippers on fort treks.",
    icon: "mountain",
  },
  {
    title: "First Aid Knowledge",
    description:
      "Learn basic first aid before your trek. Know how to treat blisters, sprains, and insect bites. Carry a basic first aid kit with band-aids, antiseptic, and any personal medication.",
    icon: "heart",
  },
  {
    title: "Never Trek Alone",
    description:
      "Always trek with a group or an experienced guide. Many Sahyadri trails pass through dense forest where navigation can be tricky. Inform someone about your trek plan and expected return time.",
    icon: "users",
  },
  {
    title: "Carry Proper Nutrition",
    description:
      "Pack energy bars, chikki, dry fruits, and enough food for the trek. Start with a good breakfast. Your body needs fuel for the climb. Carry glucose powder for emergency energy.",
    icon: "utensils",
  },
]


export const whatsappNumber = "+91-8010283201" 
export const maharashtraTrekNames: string[] = [
  "Harishchandragad",
  "Kalsubai",
  "Alang Madan Kulang",
  "AMK",
  "Ratnagiri Fort",
  "Ratangad",
  "Sandhan Valley",
  "Andharban",
  "Rajmachi",
  "Lohagad",
  "Visapur",
  "Tikona",
  "Tung",
  "Korigad",
  "Rajgad",
  "Torna",
  "Sinhagad",
  "Raigad",
  "Pratapgad",
  "Lingana",
  "Sudhagad",
  "Sarasgad",
  "Karnala",
  "Irshalgad",
  "Peb (Vikatgad)",
  "Matheran One Tree Hill",
  "Chanderi",
  "Sondai",
  "Gorakhgad",
  "Machindragad",
  "Dhak Bahiri",
  "Kalavantin Durg",
  "Prabalgad",
  "Manikgad",
  "Mahuli",
  "Vasota",
  "Salher",
  "Mulher",
  "Hargad",
  "Anjaneri",
  "Harihar",
  "Tringalwadi",
  "Bhaskargad",
  "Ajobagad",
  "Kothaligad (Peth)",
  "Rajgad to Torna",
  "Bhimashankar",
  "Naneghat",
  "Jivdhan",
  "Shivneri",
  "Purandar",
  "Malhargad",
  "Rajdeher",
  "Dhakoba",
  "Kille Ghangad",
  "Tailbaila",
  "Devkund",
  "Kataldhar",
  "Duke’s Nose",
  "Garbet Plateau",
  "Mangi Tungi",
  "Chavand",
  "Hadsar",
  "Rohida (Vichitragad)",
  "Kenjalgad",
  "Kaas Plateau",
  "Korigad Night Trek",
  "Vikatgad Night Trek",
  "Katraj to Sinhagad",
  "Rajgad Night Trek",
  "Torna Night Trek",
  "Rajgad to Raigad",
  "Raigad to Lingana",
  "Vikatgad",
  "Ajoba Hill",
  "Ghangad",
  "Songiri",
  "Dhodap",
  "Indrai",
  "Markandeya",
  "Ahivant",
  "Ramshej",
  "Kanchana",
  "Chandwad",
  "Kille Arnala",
  "Kolad Trek",
  "Malshej Ghat",
  "Harishchandragad via Nalichi Vaat",
  "Harishchandragad via Pachnai",
  "AMK Traverse"
];
