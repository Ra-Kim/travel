import React from "react";
import { GithubLogo } from "@phosphor-icons/react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="page-width footer-inner">
                <p className="footer-title">More postcards on the way.</p>
                <p className="footer-note">
                    The card fronts are illustrations for now. Built with React.
                </p>
                <a className="footer-link" href="https://github.com/Ra-Kim/travel">
                    <GithubLogo weight="fill" aria-hidden="true" />
                    Source on GitHub
                </a>
            </div>
        </footer>
    );
}
