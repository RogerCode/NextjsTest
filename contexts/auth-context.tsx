import React, { Component, createContext, useContext } from 'react'
import { useSelector } from 'react-redux';
import { CountersState } from '../store/states/counterState';
import Home from '../pages';
import { Router, useRouter } from 'next/router';
import { ignoreElements } from 'rxjs/operators';



const AuthProvider = ({ children }) => {
    const state = useSelector((state: CountersState) => state.isLogged)
    const router = useRouter()
    const allowedUrls = [
        'login',
        'register'
    ];
    const isAllowedUrl: boolean = !allowedUrls.find(allowedUrl => router.pathname.includes(allowedUrl))
    if (!state && isAllowedUrl) {
        return <Home />
    }
    
    return children
}

export default AuthProvider;