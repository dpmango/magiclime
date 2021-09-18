import React, { FC, useMemo, useState } from 'react';
// import { Editor } from 'react-draft-wysiwyg';
// import {
//   EditorState,
//   ContentState,
//   convertToRaw,
//   convertFromHTML,
// } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import cln from 'classnames';
import useStyles from './styles';

interface IProps {
  onChange: (value: string) => void;
  initialValue?: string;
  className?: string;
}

const TextEditor: FC<IProps> = ({ onChange, initialValue, className }) => {
  // const initialEditorValue = useMemo(
  //   () =>
  //     initialValue
  //       ? EditorState.createWithContent(
  //           ContentState.createFromBlockArray(
  //             convertFromHTML(initialValue).contentBlocks
  //           )
  //         )
  //       : EditorState.createEmpty(),
  //   [initialValue]
  // );
  //
  // const [value, setValue] = useState<EditorState>(initialEditorValue);
  // const styles = useStyles();
  //
  // const handleChange = (value: EditorState) => {
  //   const data = draftToHtml(convertToRaw(value.getCurrentContent()));
  //   setValue(value);
  //   onChange(data);
  // };
  //
  // const toolbar = useMemo(
  //   () => ({
  //     options: [
  //       'inline',
  //       'fontSize',
  //       'list',
  //       'textAlign',
  //       'colorPicker',
  //       'link',
  //       'image',
  //       'emoji',
  //     ],
  //   }),
  //   []
  // );
  //
  // return (
  //   <Editor
  //     editorState={value}
  //     onEditorStateChange={handleChange}
  //     toolbar={toolbar}
  //     editorClassName={styles.editor}
  //     toolbarClassName={styles.toolbar}
  //     wrapperClassName={cln(styles.root, className)}
  //   />
  // );
  return <div />;
};

export default TextEditor;
