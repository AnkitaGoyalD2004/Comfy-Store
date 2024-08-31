import { FeaturedProducts, Hero } from '../components';


//fast refresh is enabled only if - file exports only a component
//so i made a new file named loaders

const Landing = ()=>{
    return (
        <>
        <Hero></Hero>
        <FeaturedProducts></FeaturedProducts>
        </>
    );
}

export default Landing;