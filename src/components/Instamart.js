import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible }) => {

    // const [isVisible, setisVisible] = useState(false)
    return (
        <div className="insta">
            <h3 className="insta-title">{title}</h3>
            {isVisible ? <button onClick={() => setIsVisible(false)}>Hide</button> : <button onClick={() => setIsVisible(true)}>Show</button>}

            {isVisible && <p>{description}</p>}
        </div>
    )

}

const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState("about")
    return (
        <>
            <div>
                <h1 className="">Instamart</h1>
                <Section
                    title={"About Instamart"}
                    description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
                    isVisible={visibleSection === "about"}
                    setIsVisible={()=>setIsVisibleSection("about") }
                />

                <Section
                    title={"Team Instamart"}
                    description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
                    isVisible={visibleSection === "team"}
                    setIsVisible={()=> setIsVisibleSection("team")}
                />

                <Section
                    title={"Careers Instamart"}
                    description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
                    isVisible={visibleSection === "career"}
                    setIsVisible={()=> setIsVisibleSection("career")}
                />

            </div>

        </>
    )
}
export default Instamart