import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiFlask,
} from 'react-icons/si';

const tech = [
  { name: 'HTML5', icon: <FaHtml5 className='text-orange-500' /> },
  { name: 'CSS3', icon: <FaCss3Alt className='text-blue-500' /> },
  { name: 'JavaScript', icon: <FaJs className='text-yellow-400' /> },
  { name: 'React', icon: <FaReact className='text-sky-500' /> },
  { name: 'Redux Toolkit', icon: <SiRedux className='text-purple-500' /> },
  { name: 'TypeScript', icon: <SiTypescript className='text-blue-500' /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-cyan-400' /> },
  { name: 'Node.js', icon: <FaNodeJs className='text-green-600' /> },
  { name: 'MongoDB', icon: <SiMongodb className='text-green-500' /> },
  { name: 'Java', icon: <FaJava className='text-orange-500' /> },
  { name: 'Python', icon: <FaPython className='text-yellow-400' /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Docker', icon: <SiDocker className='text-blue-400' /> },
  { name: 'Kubernetes', icon: <SiKubernetes className='text-blue-600' /> },
  { name: 'Git', icon: <FaGitAlt className='text-red-500' /> },
];

const TechStack = () => (
  <section id='tech' className='py-16 px-6 max-w-6xl mx-auto'>
    <h2 className='text-4xl font-bold text-center mb-12'>Technical Stack</h2>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center'>
      {tech.map((item, index) => (
        <div key={index} className='flex flex-col items-center'>
          <div className='text-4xl mb-2'>{item.icon}</div>
          <span className='text-sm font-medium'>{item.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
