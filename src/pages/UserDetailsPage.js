import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailsPage = () => {
    const { userId } = useParams();

    // Define a fake user object
    const user = {
        userId: userId,
        name: 'John Doe',
        email: 'john.doe@example.com',
        // Add more user details as needed
    };

    // Define an array of fake car documents
    const carDocuments = [
        {
            documentId: '1',
            documentName: 'Car Registration',
            // Add more document details as needed
        },
        {
            documentId: '2',
            documentName: 'Insurance Certificate',
            // Add more document details as needed
        },
    ];

    // Define an array of fake recent activity
    const recentActivity = [
        {
            id: '1',
            date: '2023-10-05',
            activityDescription: 'Updated profile information',
            // Add more activity details as needed
        },
        {
            id: '2',
            date: '2023-10-03',
            activityDescription: 'Uploaded car registration document',
            // Add more activity details as needed
        },
    ];

    return (
        <div>
            <h2>User Details</h2>
            <div className="user-card">
                <p>User ID: {user.userId}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                {/* Add more user details fields as needed */}
            </div>

            <h2>Car Documents</h2>
            <div className="car-document-box">
                {carDocuments.map((document) => (
                    <div key={document.documentId} className="car-document">
                        <p>Document ID: {document.documentId}</p>
                        <p>Document Name: {document.documentName}</p>
                        {/* Display other document details */}
                    </div>
                ))}
            </div>

            <h2>Recent Activity</h2>
            <div className="activity-box">
                {recentActivity.map((activity) => (
                    <div key={activity.id} className="activity-item">
                        <p>Date: {activity.date}</p>
                        <p>Activity: {activity.activityDescription}</p>
                        {/* Display other activity details */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDetailsPage;
