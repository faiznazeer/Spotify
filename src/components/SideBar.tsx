import Albums from "./Icons/Albums";
import Artists from "./Icons/Artists";
import AudioBooks from "./Icons/AudioBooks";
import Folders from "./Icons/Folders";
import Like from "./Icons/Like";
import Pin from "./Icons/Pin";
import Playlist from "./Icons/Playlist";
import Podcasts from "./Icons/Podcasts";
import RightArrow from "./Icons/RightArrow";
import Saves from "./Icons/Saves";

export default function SideBar() {
    return <div className="w-[14.6245%] text-[#898989] flex flex-col gap-[11px]">
        <ul className="ml-[10px]">
            <li className="flex items-center justify-between">
                <div className="flex">
                    <div className="w-[40px] mr-[10px]">
                        <Pin />
                    </div>
                    <a className="hover:underline my-auto" href="#">Pins</a>
                </div>
                <div className="w-[40px] mr-[10px]">
                    <RightArrow />
                </div>
            </li>
        </ul>
        <ul className="ml-[10px]">
        <li className="flex items-center justify-between">
                <div className="flex">
                    <div className="w-[40px] mr-[10px]">
                        <Playlist />
                    </div>
                    <a className="hover:underline my-auto" href="#">Playlists</a>
                </div>
                <div className="w-[40px] mr-[10px]">
                    <RightArrow />
                </div>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <Like />
                </div>
                <a className="hover:underline" href="#">Liked Songs</a>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <Saves />
                </div>
                <a className="hover:underline" href="#">Saves</a>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <Albums />
                </div>
                <a className="hover:underline" href="#">Albums</a>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <Folders />
                </div>
                <a className="hover:underline" href="#">Folders</a>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <Podcasts />
                </div>
                <a className="hover:underline" href="#">Podcasts</a>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <AudioBooks />
                </div>
                <a className="hover:underline" href="#">AudioBooks</a>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <Artists />
                </div>
                <a className="hover:underline" href="#">Artists</a>
            </li>
        </ul>

    </div>
}