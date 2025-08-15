import { Official, Game, AvailabilityStatus, PassPreference, GameStatus } from './types.ts';

export const OFFICIALS: Official[] = [
  { id: '1', name: 'Matt Hope (Admin)', password_DO_NOT_USE_IN_PRODUCTION: 'hope', email: 'matt.hope@example.com', phone: '905-555-0101', address: '123 Hockey St, St. Catharines, ON L2R 1A1', passPreference: PassPreference.DIGITAL },
  { id: '2', name: 'Tim Cook', password_DO_NOT_USE_IN_PRODUCTION: 'cook', email: 'tim.cook@example.com', phone: '905-555-0102', address: '456 Goal Ave, Niagara Falls, ON L2E 6X8', passPreference: PassPreference.PHYSICAL },
  { id: '3', name: 'Curtis Pirson', password_DO_NOT_USE_IN_PRODUCTION: 'pirson', email: 'curtis.pirson@example.com', phone: '905-555-0103', address: '789 Rink Rd, Welland, ON L3B 5N4', passPreference: PassPreference.DIGITAL },
  { id: '4', name: 'Wayne Briggs-Jude (Admin)', password_DO_NOT_USE_IN_PRODUCTION: 'briggs-jude', email: 'wayne.bj@example.com', phone: '905-555-0104', address: '101 Puck Dr, Thorold, ON L2V 4Y6', passPreference: PassPreference.PHYSICAL },
  { id: '5', name: 'Brent Archer', password_DO_NOT_USE_IN_PRODUCTION: 'archer', email: 'brent.archer@example.com', phone: '905-555-0105', address: '212 Skate Ln, Grimsby, ON L3M 4E8', passPreference: PassPreference.DIGITAL },
  { id: '6', name: 'John Sykes', password_DO_NOT_USE_IN_PRODUCTION: 'sykes', email: 'john.sykes@example.com', phone: '905-555-0106', address: '333 Blueline Blvd, St. Catharines, ON L2M 7W7', passPreference: PassPreference.PHYSICAL },
  { id: '7', name: 'Marco Peloso', password_DO_NOT_USE_IN_PRODUCTION: 'peloso', email: 'marco.peloso@example.com', phone: '905-555-0107', address: '444 Center Ice Cir, Niagara Falls, ON L2G 0C1', passPreference: PassPreference.DIGITAL },
  { id: '8', name: 'Jenna Duarte', password_DO_NOT_USE_IN_PRODUCTION: 'duarte', email: 'jenna.duarte@example.com', phone: '905-555-0108', address: '555 Slapshot St, Welland, ON L3C 2T3', passPreference: PassPreference.PHYSICAL },
  { id: '9', name: 'Michael Dyck', password_DO_NOT_USE_IN_PRODUCTION: 'dyck', email: 'michael.dyck@example.com', phone: '905-555-0109', address: '666 Penalty Box Pl, Thorold, ON L2V 3Z4', passPreference: PassPreference.DIGITAL },
  { id: '10', name: 'Henry Boozan', password_DO_NOT_USE_IN_PRODUCTION: 'boozan', email: 'henry.boozan@example.com', phone: '905-555-0110', address: '777 Zamboni Way, Grimsby, ON L3M 1J7', passPreference: PassPreference.PHYSICAL },
  { id: '11', name: 'Rock Aitchison', password_DO_NOT_USE_IN_PRODUCTION: 'aitchison', email: 'rock.aitchison@example.com', phone: '905-555-0111', address: '888 Hat Trick Hts, St. Catharines, ON L2P 3H2', passPreference: PassPreference.DIGITAL },
  { id: '12', name: 'Mike Koros', password_DO_NOT_USE_IN_PRODUCTION: 'koros', email: 'mike.koros@example.com', phone: '905-555-0112', address: '999 Powerplay Pkwy, Niagara Falls, ON L2H 1B3', passPreference: PassPreference.PHYSICAL },
  { id: '13', name: 'Paul Martin', password_DO_NOT_USE_IN_PRODUCTION: 'martin', email: 'paul.martin@example.com', phone: '905-555-0113', address: '111 Crease Ct, Welland, ON L3B 3X9', passPreference: PassPreference.DIGITAL },
  { id: '14', name: 'Kevin Bowman', password_DO_NOT_USE_IN_PRODUCTION: 'bowman', email: 'kevin.bowman@example.com', phone: '905-555-0114', address: '222 Faceoff Ferry, Thorold, ON L2V 1A1', passPreference: PassPreference.PHYSICAL },
  { id: '15', name: 'Brian Berry', password_DO_NOT_USE_IN_PRODUCTION: 'berry', email: 'brian.berry@example.com', phone: '905-555-0115', address: '333 Icing Islet, Grimsby, ON L3M 5J1', passPreference: PassPreference.DIGITAL },
  { id: '16', name: 'Chad Nelson', password_DO_NOT_USE_IN_PRODUCTION: 'nelson', email: 'chad.nelson@example.com', phone: '905-555-0116', address: '444 Offside Oasis, St. Catharines, ON L2S 3A4', passPreference: PassPreference.PHYSICAL },
];

export const ADMIN_IDS: string[] = ['1', '4'];

export const OFF_ICE_ROLE_CATEGORIES = {
  'Ice Level': [
    'Game Clock',
    'OHL Gamesheet',
    'Penalty Box (1)',
    'Penalty Box (2)',
    'Goal Judge (1)',
    'Goal Judge (2)',
  ],
  'Booth': [
    'Official Scorer',
    'SOG/FO Computer',
    'SOG/FO Sheet',
    'Online Computer',
    'Plus/Minus',
    'Video Tech',
    'Crew Chief',
  ]
};

export const OFF_ICE_ROLES: string[] = Object.values(OFF_ICE_ROLE_CATEGORIES).flat();

const opponentLogos: { [key: string]: string } = {
    'Sudbury Wolves': 'https://chl.ca/wp-content/uploads/sites/2/2020/07/sub_primary_2020.png',
    'Barrie Colts': 'https://chl.ca/wp-content/uploads/sites/2/2022/08/bar_primary_2022.png',
    'Brantford Bulldogs': 'https://chl.ca/wp-content/uploads/sites/2/2023/06/bra_primary-2023.png',
    'Erie Otters': 'https://chl.ca/wp-content/uploads/sites/2/2020/07/eri_primary_2020.png',
    'Brampton Steelheads': 'https://chl.ca/wp-content/uploads/sites/2/2024/05/bmp_primary-2024.png',
    'Kingston Frontenacs': 'https://chl.ca/wp-content/uploads/sites/2/2020/07/kin_primary_2020.png',
    'Ottawa 67\'s': 'https://chl.ca/wp-content/uploads/sites/2/2017/08/ott_primary-1999.png',
    'Peterborough Petes': 'https://chl.ca/wp-content/uploads/sites/2/2017/08/pet_primary-1991.png',
    'North Bay Battalion': 'https://chl.ca/wp-content/uploads/sites/2/2017/08/nb_primary-2014.png',
    'London Knights': 'https://chl.ca/wp-content/uploads/sites/2/2017/08/ldn_primary-2002.png',
    'Flint Firebirds': 'https://chl.ca/wp-content/uploads/sites/2/2017/08/flnt_primary-2015.png',
    'Sarnia Sting': 'https://chl.ca/wp-content/uploads/sites/2/2019/06/sar_primary-2019.png',
    'Oshawa Generals': 'https://chl.ca/wp-content/uploads/sites/2/2023/08/osh_primary-2023.png',
    'Windsor Spitfires': 'https://chl.ca/wp-content/uploads/sites/2/2017/08/wdr_primary-2008.png',
    'Guelph Storm': 'https://chl.ca/wp-content/uploads/sites/2/2017/08/gph_primary-1996.png',
    'Sault Ste. Marie Greyhounds': 'https://chl.ca/wp-content/uploads/sites/2/2017/08/ssm_primary-2003.png',
    'Kitchener Rangers': 'https://chl.ca/wp-content/uploads/sites/2/2017/08/kit_primary-2012.png',
    'Owen Sound Attack': 'https://chl.ca/wp-content/uploads/sites/2/2017/08/os_primary-2011.png',
    'Saginaw Spirit': 'https://chl.ca/wp-content/uploads/sites/2/2017/08/sag_primary-2002.png',
    'Exhibition Game': 'https://chl.ca/wp-content/uploads/sites/2/2024/05/ohl_primary-2024.png',
};

export const INITIAL_GAMES: Game[] = [
    { 
        id: 'g-pre1', 
        date: 'Saturday, Aug 30, 2025', 
        time: '7:00 PM', 
        opponent: 'Exhibition Game', 
        opponentLogo: opponentLogos['Exhibition Game'], 
        status: GameStatus.PENDING,
        availability: {
            '1': AvailabilityStatus.UNAVAILABLE,
            '2': AvailabilityStatus.AVAILABLE,
            '3': AvailabilityStatus.UNAVAILABLE,
            '4': AvailabilityStatus.AVAILABLE,
            '5': AvailabilityStatus.UNAVAILABLE,
            '6': AvailabilityStatus.AVAILABLE,
            '7': AvailabilityStatus.UNAVAILABLE,
            '8': AvailabilityStatus.UNAVAILABLE,
            '9': AvailabilityStatus.UNAVAILABLE,
            '10': AvailabilityStatus.AVAILABLE,
            '11': AvailabilityStatus.AVAILABLE,
            '12': AvailabilityStatus.UNAVAILABLE,
            '13': AvailabilityStatus.AVAILABLE,
            '14': AvailabilityStatus.AVAILABLE,
            '15': AvailabilityStatus.AVAILABLE,
            '16': AvailabilityStatus.AVAILABLE,
        }, 
        assignments: {} 
    },
    { 
        id: 'g-pre2', 
        date: 'Thursday, Sep 4, 2025', 
        time: '7:00 PM', 
        opponent: 'Exhibition Game', 
        opponentLogo: opponentLogos['Exhibition Game'], 
        status: GameStatus.PENDING,
        availability: {
            '1': AvailabilityStatus.AVAILABLE,
            '2': AvailabilityStatus.AVAILABLE,
            '3': AvailabilityStatus.AVAILABLE,
            '4': AvailabilityStatus.AVAILABLE,
            '5': AvailabilityStatus.AVAILABLE,
            '6': AvailabilityStatus.AVAILABLE,
            '7': AvailabilityStatus.AVAILABLE,
            '8': AvailabilityStatus.UNAVAILABLE,
            '9': AvailabilityStatus.UNAVAILABLE,
            '10': AvailabilityStatus.AVAILABLE,
            '11': AvailabilityStatus.AVAILABLE,
            '12': AvailabilityStatus.UNAVAILABLE,
            '13': AvailabilityStatus.UNAVAILABLE,
            '14': AvailabilityStatus.AVAILABLE,
            '15': AvailabilityStatus.AVAILABLE,
            '16': AvailabilityStatus.AVAILABLE,
        }, 
        assignments: {} 
    },
    { id: 'g1', date: 'Saturday, Sep 21, 2025', time: '2:00 PM', opponent: 'Sudbury Wolves', opponentLogo: opponentLogos['Sudbury Wolves'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g2', date: 'Saturday, Oct 5, 2025', time: '2:00 PM', opponent: 'Barrie Colts', opponentLogo: opponentLogos['Barrie Colts'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g3', date: 'Wednesday, Oct 9, 2025', time: '7:00 PM', opponent: 'Brantford Bulldogs', opponentLogo: opponentLogos['Brantford Bulldogs'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g4', date: 'Saturday, Oct 12, 2025', time: '2:00 PM', opponent: 'Sudbury Wolves', opponentLogo: opponentLogos['Sudbury Wolves'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g5', date: 'Friday, Oct 18, 2025', time: '7:00 PM', opponent: 'Erie Otters', opponentLogo: opponentLogos['Erie Otters'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g6', date: 'Thursday, Oct 24, 2025', time: '7:00 PM', opponent: 'Brampton Steelheads', opponentLogo: opponentLogos['Brampton Steelheads'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g7', date: 'Friday, Oct 25, 2025', time: '7:00 PM', opponent: 'Kingston Frontenacs', opponentLogo: opponentLogos['Kingston Frontenacs'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g8', date: 'Thursday, Oct 31, 2025', time: '7:00 PM', opponent: 'Brampton Steelheads', opponentLogo: opponentLogos['Brampton Steelheads'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g9', date: 'Wednesday, Nov 6, 2025', time: '7:00 PM', opponent: 'Ottawa 67\'s', opponentLogo: opponentLogos['Ottawa 67\'s'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g10', date: 'Wednesday, Nov 20, 2025', time: '7:00 PM', opponent: 'Brantford Bulldogs', opponentLogo: opponentLogos['Brantford Bulldogs'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g11', date: 'Friday, Nov 22, 2025', time: '7:00 PM', opponent: 'Barrie Colts', opponentLogo: opponentLogos['Barrie Colts'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g12', date: 'Saturday, Nov 30, 2025', time: '2:00 PM', opponent: 'Peterborough Petes', opponentLogo: opponentLogos['Peterborough Petes'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g13', date: 'Saturday, Dec 7, 2025', time: '2:00 PM', opponent: 'North Bay Battalion', opponentLogo: opponentLogos['North Bay Battalion'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g14', date: 'Wednesday, Dec 11, 2025', time: '7:00 PM', opponent: 'London Knights', opponentLogo: opponentLogos['London Knights'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g15', date: 'Saturday, Dec 14, 2025', time: '2:00 PM', opponent: 'North Bay Battalion', opponentLogo: opponentLogos['North Bay Battalion'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g16', date: 'Thursday, Dec 19, 2025', time: '7:00 PM', opponent: 'Flint Firebirds', opponentLogo: opponentLogos['Flint Firebirds'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g17', date: 'Friday, Dec 20, 2025', time: '7:00 PM', opponent: 'Sarnia Sting', opponentLogo: opponentLogos['Sarnia Sting'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g18', date: 'Saturday, Dec 28, 2025', time: '2:00 PM', opponent: 'Brampton Steelheads', opponentLogo: opponentLogos['Brampton Steelheads'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g19', date: 'Tuesday, Dec 31, 2025', time: '6:00 PM', opponent: 'Oshawa Generals', opponentLogo: opponentLogos['Oshawa Generals'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g20', date: 'Thursday, Jan 2, 2026', time: '7:00 PM', opponent: 'Windsor Spitfires', opponentLogo: opponentLogos['Windsor Spitfires'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g21', date: 'Wednesday, Jan 15, 2026', time: '7:00 PM', opponent: 'Guelph Storm', opponentLogo: opponentLogos['Guelph Storm'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g22', date: 'Saturday, Jan 18, 2026', time: '2:00 PM', opponent: 'Brantford Bulldogs', opponentLogo: opponentLogos['Brantford Bulldogs'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g23', date: 'Wednesday, Jan 22, 2026', time: '7:00 PM', opponent: 'Barrie Colts', opponentLogo: opponentLogos['Barrie Colts'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g24', date: 'Saturday, Jan 25, 2026', time: '2:00 PM', opponent: 'Brampton Steelheads', opponentLogo: opponentLogos['Brampton Steelheads'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g25', date: 'Wednesday, Jan 29, 2026', time: '7:00 PM', opponent: 'Sault Ste. Marie Greyhounds', opponentLogo: opponentLogos['Sault Ste. Marie Greyhounds'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g26', date: 'Saturday, Feb 1, 2026', time: '4:00 PM', opponent: 'North Bay Battalion', opponentLogo: opponentLogos['North Bay Battalion'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g27', date: 'Friday, Feb 7, 2026', time: '7:00 PM', opponent: 'Kitchener Rangers', opponentLogo: opponentLogos['Kitchener Rangers'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g28', date: 'Wednesday, Feb 12, 2026', time: '7:00 PM', opponent: 'Owen Sound Attack', opponentLogo: opponentLogos['Owen Sound Attack'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g29', date: 'Wednesday, Feb 26, 2026', time: '7:00 PM', opponent: 'Erie Otters', opponentLogo: opponentLogos['Erie Otters'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g30', date: 'Wednesday, Mar 5, 2026', time: '7:00 PM', opponent: 'Saginaw Spirit', opponentLogo: opponentLogos['Saginaw Spirit'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g31', date: 'Thursday, Mar 6, 2026', time: '7:00 PM', opponent: 'Peterborough Petes', opponentLogo: opponentLogos['Peterborough Petes'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g32', date: 'Wednesday, Mar 12, 2026', time: '7:00 PM', opponent: 'Kingston Frontenacs', opponentLogo: opponentLogos['Kingston Frontenacs'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g33', date: 'Saturday, Mar 15, 2026', time: '2:00 PM', opponent: 'Ottawa 67\'s', opponentLogo: opponentLogos['Ottawa 67\'s'], status: GameStatus.PENDING, availability: {}, assignments: {} },
    { id: 'g34', date: 'Saturday, Mar 22, 2026', time: '2:00 PM', opponent: 'Erie Otters', opponentLogo: opponentLogos['Erie Otters'], status: GameStatus.PENDING, availability: {}, assignments: {} },
];

// Initialize availability and assignments for all games
INITIAL_GAMES.forEach(game => {
    // If availability object is empty, then populate with PENDING.
    // This allows pre-setting availability for some games.
    if (Object.keys(game.availability).length === 0) {
        OFFICIALS.forEach(official => {
            game.availability[official.id] = AvailabilityStatus.PENDING;
        });
    }

    // Assignments are always initialized if not present.
    if (Object.keys(game.assignments).length === 0) {
        OFF_ICE_ROLES.forEach(role => {
            game.assignments[role] = null;
        });
    }

    if (!game.status) {
        (game as any).status = GameStatus.PENDING;
    }
});

// Initialize password change flag for all officials
OFFICIALS.forEach(official => {
    if (official.forcePasswordChange === undefined) {
        official.forcePasswordChange = true;
    }
});