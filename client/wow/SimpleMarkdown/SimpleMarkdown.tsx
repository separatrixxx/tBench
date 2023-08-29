import styles from './SimpleMarkdown.module.css';
import { useEffect, useState } from 'react';


export const SimpleMarkdown = (): JSX.Element => {
    const [inputText, setInputText] = useState<string>('');
    const [textBox, setTextBox] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setTextBox(document.getElementById('textBox'));
    }, []);

    const mdFunc = (text: string) => {
        const boldRegexp = /\*\*(\S*)\*\*/gm;
        const italicRegexp = /\*(\S*)\*/gm;
        const boldItalicRegexp = /\*\*\*(\S*)\*\*\*/gm;
        const redRegexp = /<red>(\S*)/gm;

        let boldArr = Array.from(text.matchAll(boldRegexp));
        let italicArr = Array.from(text.matchAll(italicRegexp));
        let boldItalicArr = Array.from(text.matchAll(boldItalicRegexp));
        let redArr = Array.from(text.matchAll(redRegexp));

        for (let ra of boldItalicArr) {
            text = text.replace(ra[0], '<b><i>' + ra[1] + '</i></b>');
        }

        for (let ra of boldArr) {
            text = text.replace(ra[0], '<b>' + ra[1] + '</b>');
        }

        for (let ra of italicArr) {
            text = text.replace(ra[0], '<i>' + ra[1] + '</i>');
        }

        for (let ra of redArr) {
            text = text.replace(ra[0], '<p style="color: red">' + ra[1] + '</p>');
        }

        if (textBox) {
            textBox.innerHTML = text;
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.mdForm}>
                <textarea className={styles.textarea}
                    placeholder='Text'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    name="text"
                    aria-label="text" />
                <p id='textBox' className={styles.output}></p>
            </div>
            <button className={styles.button} onClick={() => mdFunc(inputText)}>Click</button>
        </div>
    );
}