import React from 'react';

export default class DetailSection extends React.Component {

    render() {
        return (
            <div className="project_detail_container">
                <div className="project_header_section">
                    <div className="project_icon">
                        <img alt="ICON" />
                    </div>
                    <div className="button_section">
                        <button>
                            INSTALL
                        </button>
                        <button>
                            SHARE
                        </button>
                    </div>
                </div>
                <div className="project_text_detail">
                    <div className="project_text_row">
                        <span>FILENAME</span><span>&lt;App Name&gt;</span>
                    </div>
                    <div className="project_text_row">
                        <span>BUNDLE ID</span><span>&lt;app.bundle.id&gt;</span>
                    </div>
                    <div className="project_text_row">
                        <span>VERSION</span><span>&lt;Version No.&gt;</span>
                    </div>
                    <div className="project_text_row">
                        <span>SIZE</span><span>&lt;Size MB&gt;</span>
                    </div>
                    <div className="project_text_row">
                        <span>UPLOADED BY</span><span>&lt;Uploader Name&gt;</span>
                    </div>
                    <div className="project_text_row">
                        <span>UPLOADED ON</span><span>&lt;Uploaded Date&gt;</span>
                    </div>
                </div>
                <div className="project_link">
                    <div className="project_qr">
                        <img alt="QR" />
                    </div>
                </div>
            </div>
        );
    }
}