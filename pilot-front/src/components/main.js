import { Background, Header, Logo, SideMenu, IconsContainer } from "../styles/generalStyles";
import { IoHomeOutline, IoPeopleOutline, IoAddCircleOutline, IoTimeOutline, IoBriefcaseOutline, IoStorefrontOutline, IoEllipsisHorizontalCircleOutline } from "react-icons/io5";

export default function Main(){
    return(
        <Background>
            <Header>
                <Logo src="./assets/piotto-logo.png" />
            </Header>
            <SideMenu>
                <IconsContainer>
                    <div>
                        <IoHomeOutline />
                    </div>
                    <div>
                        <IoAddCircleOutline />
                    </div>
                    <div>
                        <IoTimeOutline />
                    </div>
                    <div>
                        <IoPeopleOutline />
                    </div>
                    <div>
                        <IoBriefcaseOutline />
                    </div>
                    <div>
                        <IoStorefrontOutline />
                    </div>
                    <div>
                        <IoEllipsisHorizontalCircleOutline />
                    </div>
                </IconsContainer>
            </SideMenu>
        </Background>
    );
};