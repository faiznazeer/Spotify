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
                    <span className="my-auto">Pins</span>
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
                    <span className="my-auto">Playlists</span>
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
                <span>Liked Songs</span>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <Saves />
                </div>
                <span>Saves</span>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <Albums />
                </div>
                <span>Albums</span>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <Folders />
                </div>
                <span>Folders</span>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <Podcasts />
                </div>
                <span>Podcasts</span>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <AudioBooks />
                </div>
                <span>AudioBooks</span>
            </li>
        </ul>
        <ul className="ml-[10px]">
            <li className="flex items-center">
                <div className="w-[40px] mr-[10px]">
                    <Artists />
                </div>
                <span>Artists</span>
            </li>
        </ul>

    </div>
}