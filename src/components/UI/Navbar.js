import logo from '../../assets/img/logo.png';

const Navbar = props => {
    return (
        <div class='pt-2 fixed mx-auto w-full z-10 bg-gray-50 navbar'>
            <nav class='flex justify-between mx-auto max-w-5xl md:w-4/5 lg:w-3/4 '>
                <span class='hidden w-10 md:block md:ml-5 lg:mr-0'><a href='#' ><img src={logo} alt='' class='inline' /></a></span>
                <ul class='flex  md:mr-2'>
                    <li><button class='btn btn-ghost btn-xs mx-1 sm:btn-sm lg:btn-md h-auto'>Projects</button> </li>
                    <li><button class='btn btn-ghost btn-xs mx-1 sm:btn-sm lg:btn-md h-auto'>Code<span class='hidden sm:inline sm:ml-2'>Library</span></button> </li>
                    <li><button class='btn btn-ghost btn-xs mx-1 sm:btn-sm lg:btn-md h-auto'>Blog<span class='hidden sm:inline sm:ml-2'>Posts</span></button> </li>
                    <li><button class='btn btn-ghost btn-xs mx-1 sm:btn-sm lg:btn-md h-auto'>About</button> </li>
                    <li><button class='btn btn-ghost btn-xs sm:btn-sm lg:btn-md h-auto'>Contact</button> </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;