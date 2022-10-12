import {
  BeakerIcon,
  ArchiveBoxIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BackspaceIcon,
  Battery0Icon,
  Battery100Icon,
  BookOpenIcon,
  BookmarkIcon,
  LanguageIcon,
  TrashIcon,
  BellIcon,
  HomeIcon,
  CakeIcon,
  CalculatorIcon,
  HashtagIcon,
} from '@heroicons/react/24/solid';

const allcards = [
  {
    title: '1',
    icon: <BeakerIcon className="w-14" />,
  },
  {
    title: '2',
    icon: <ArchiveBoxIcon className="w-14" />,
  },
  {
    title: '3',
    icon: <ArrowDownIcon className="w-14" />,
  },
  {
    title: '4',
    icon: <ArrowLeftIcon className="w-14" />,
  },
  {
    title: '5',
    icon: <ArrowRightIcon className="w-14" />,
  },
  {
    title: '6',
    icon: <ArrowUpIcon className="w-14" />,
  },
  {
    title: '7',
    icon: <BackspaceIcon className="w-14" />,
  },
  {
    title: '8',
    icon: <Battery0Icon className="w-14" />,
  },
  {
    title: '9',
    icon: <Battery100Icon className="w-14" />,
  },
  {
    title: '10',
    icon: <BookOpenIcon className="w-14" />,
  },
  {
    title: '11',
    icon: <BookmarkIcon className="w-14" />,
  },
  {
    title: '12',
    icon: <LanguageIcon className="w-14" />,
  },
  {
    title: '13',
    icon: <TrashIcon className="w-14" />,
  },
  {
    title: '14',
    icon: <BellIcon className="w-14" />,
  },
  {
    title: '15',
    icon: <HomeIcon className="w-14" />,
  },
  {
    title: '16',
    icon: <CakeIcon className="w-14" />,
  },
  {
    title: '17',
    icon: <CalculatorIcon className="w-14" />,
  },
  {
    title: '18',
    icon: <HashtagIcon className="w-14" />,
  },
];

const readyForMix = [...allcards, ...allcards];

export const cards = shuffleArray(readyForMix);
