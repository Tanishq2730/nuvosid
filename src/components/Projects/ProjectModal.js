"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ProjectModal = ({ project, onClose }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (project) {
            // Prevent body scroll when modal is open
            document.body.style.overflow = "hidden";
            // Trigger animation
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            document.body.style.overflow = "unset";
            setIsAnimating(false);
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [project]);

    if (!project) return null;

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "20px",
                opacity: isAnimating ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
            }}
        >
            <div
                className="modal-content project-modal"
                onClick={(e) => e.stopPropagation()}
                style={{
                    backgroundColor: "#1a1f2e",
                    borderRadius: "16px",
                    maxWidth: "700px",
                    width: "100%",
                    maxHeight: "90vh",
                    overflow: "auto",
                    position: "relative",
                    transform: isAnimating ? "scale(1) translateY(0)" : "scale(0.9) translateY(20px)",
                    opacity: isAnimating ? 1 : 0,
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
                }}
            >
                <div
                    className="modal-header"
                    style={{
                        padding: "30px 40px",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2
                        className="modal-title"
                        style={{
                            margin: 0,
                            color: "#fff",
                            fontSize: "28px",
                            fontWeight: "600",
                        }}
                    >
                        {project.name}
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#fff",
                            fontSize: "32px",
                            cursor: "pointer",
                            padding: "0",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: 0.7,
                            transition: "opacity 0.2s, transform 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.opacity = "1";
                            e.target.style.transform = "rotate(90deg)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.opacity = "0.7";
                            e.target.style.transform = "rotate(0deg)";
                        }}
                    >
                        ×
                    </button>
                </div>

                <div className="modal-body" style={{ padding: "40px" }}>
                    {project.image && (
                        <div
                            className="modal-image"
                            style={{
                                width: "100%",
                                height: "auto",
                                marginBottom: "30px",
                                borderRadius: "12px",
                                overflow: "hidden",
                                position: "relative",
                                minHeight: "300px"
                            }}
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={800}
                                height={600}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    )}
                    {project.description && (
                        <p
                            className="description"
                            style={{
                                color: "rgba(255, 255, 255, 0.85)",
                                lineHeight: "1.8",
                                marginBottom: "0",
                                fontSize: "16px",
                            }}
                        >
                            {project.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;