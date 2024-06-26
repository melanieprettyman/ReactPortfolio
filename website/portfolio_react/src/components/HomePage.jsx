import ProjectTile from "./ProjectTile";
export default function HomePage(){
    return (
        <header className="header">
            <div className="main_nav">
                <div className="container">
                    <div className="mobile-toggle"><span></span> <span></span> <span></span></div>
                </div>
            </div>
            <div className="title">
                <div><span className="typcn typcn-heart-outline icon heading"></span></div>
                <div className="smallsep heading"></div>
                <h1 className="heading"> Melanie Prettyman</h1>
                <h2 className="heading">I design awesome software</h2>
            </div>
        </header>
    )
}