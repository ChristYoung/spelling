import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import React, { useRef } from 'react';

export const InputWords: React.FC = () => {
    const value = useRef<string>('');
    const onSubmitWords = () => {
        const words = value.current.trim().split('\n');
        // TODO: Need to check whether the words you input has been spelled correctly with typo-js.
        console.log('words', words);
    };
    return (
        <div className="__InputWords text-6xl text-slate-600">
            <h3 className="dark:text-white mb-10">
                Please Input the words that you want to review later.
            </h3>
            <TextareaAutosize
                minRows={10}
                onChange={e => {
                    value.current = e.target.value;
                }}
                aria-label="empty textarea"
                placeholder="Any Words"
            />
            <div>
                <Button
                    variant="contained"
                    onClick={onSubmitWords}>
                    Submit.
                </Button>
            </div>
        </div>
    );
};

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 520px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 24px ${
        theme.palette.mode === 'dark' ? blue[900] : blue[100]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
          theme.palette.mode === 'dark' ? blue[600] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);
