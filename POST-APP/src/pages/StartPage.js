/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function StartPage() {

    let history = useHistory();
    
    return (
        <div 
        css = {css`
        width:100vw;
        height:100vh;
        `}
        onClick={function() {
            return history.push('/home')}
          }
        >

        </div>
    )
}

export default StartPage;