import iconFigma from '../../assets/img/icon-figma.png';
import iconHTML5 from '../../assets/img/icon-html5.png';
import iconCSS3 from '../../assets/img/icon-css3.png';
import iconGitHub from '../../assets/img/icon-github.png';
import iconJavaScript from '../../assets/img/icon-javascript-black.png';
import TechStackElement from '../UI/TechStackElement';

const techArray = [
    <TechStackElement key={`tech1-${Math.random()}`} icon={iconFigma}>Figma</TechStackElement>,
    <TechStackElement key={`tech2-${Math.random()}`} icon={iconHTML5}>HTML5</TechStackElement>,
    <TechStackElement key={`tech3-${Math.random()}`} icon={iconCSS3}>CSS3</TechStackElement>,
    <TechStackElement key={`tech4-${Math.random()}`} icon={iconGitHub}>Git & GitHub</TechStackElement>,
    <TechStackElement key={`tech5-${Math.random()}`} icon={iconJavaScript}>JavaScript</TechStackElement>,
];

const TechStack = props => {
    !props.usedTech.includes('Figma') && techArray.splice(0, 1);
    !props.usedTech.includes('HTML5') && techArray.splice(1, 1);
    !props.usedTech.includes('CSS3') && techArray.splice(2, 1);
    !props.usedTech.includes('GitHub') && techArray.splice(3, 1);
    !props.usedTech.includes('JS') && techArray.splice(4, 1);

    return techArray;
};

export default TechStack;