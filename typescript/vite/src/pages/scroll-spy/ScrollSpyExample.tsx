import {Helmet} from "react-helmet";
import {Container} from "@/components/container";
import ScrollSpy from "@/components/scrollspy/Scrollspy.tsx";
import {useRef} from "react";

const ScrollSpyExample = () => {
    const scrollParentRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Helmet>
                <title>Scroll spy examples</title>
            </Helmet>

            <Container>
                <div>
                    <p data-to-scrollspy-id="first">Section 1</p>
                    <p data-to-scrollspy-id="second">Section 2</p>
                    <p data-to-scrollspy-id="third">Section 3</p>
                </div>
                <ScrollSpy parentScrollContainerRef={scrollParentRef}>
                    <div ref={scrollParentRef} style={{
                        maxHeight: 200,
                        overflow: "scroll",
                    }}>
                        <div id="first">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                        </div>
                        <div id="second">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                        </div>
                        <div id="third">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                            Tempore, vero!
                        </div>
                    </div>
                </ScrollSpy>
            </Container>
        </>
    );
};

export {ScrollSpyExample};