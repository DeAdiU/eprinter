

export const demoCustomer = [
    {
        id: 1,
        email: "john.doe@example.com",
        password: "securepassword123",
        name: "John Doe",
        account_number: "123456789",
        phone_number: "+1234567890"
    },
    {
        id: 2,
        email: "jane.smith@example.com",
        password: "strongpassword456",
        name: "Jane Smith",
        account_number: "987654321",
        phone_number: "+1987654321"
    },
    {
        id: 3,
        email: "michael.johnson@example.com",
        password: "password789",
        name: "Michael Johnson",
        account_number: "246813579",
        phone_number: "+1357924680"
    },
    {
        id: 4,
        email: "mary.wilson@example.com",
        password: "marywilson123",
        name: "Mary Wilson",
        account_number: "369258147",
        phone_number: "+1472583690"
    },
    {
        id: 5,
        email: "robert.miller@example.com",
        password: "securepass789",
        name: "Robert Miller",
        account_number: "951357468",
        phone_number: "+1593574680"
    }
]



export const employe = [
    {
        id: 1,
        role: "CUSTOMER_CARE_REP",
        name: "Emily Brown",
        email: "emily.brown@example.com",
        employee_id: "E123456",
        password: "password123"
    },
    {
        id: 2,
        role: "CUSTOMER_CARE_REP",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        employee_id: "E987654",
        password: "password456"
    },
    {
        id: 3,
        role: "SUPERVISOR",
        name: "Sarah White",
        email: "sarah.white@example.com",
        employee_id: "E246813",
        password: "password789"
    },
    {
        id: 4,
        role: "MANAGER",
        name: "Michael Green",
        email: "michael.green@example.com",
        employee_id: "E369258",
        password: "password123"
    },
    {
        id: 5,
        role: "CUSTOMER_CARE_REP",
        name: "Jessica Davis",
        email: "jessica.davis@example.com",
        employee_id: "E951357",
        password: "password789"
    }
]


export const empltoproduc = [
    {
        id: 1,
        employee_id: 1,
        product_id: 101
    },
    {
        id: 2,
        employee_id: 2,
        product_id: 102
    },
    {
        id: 3,
        employee_id: 3,
        product_id: 103
    },
    {
        id: 4,
        employee_id: 4,
        product_id: 104
    },
    {
        id: 5,
        employee_id: 5,
        product_id: 105
    }
]



export const demodata = [
    {
        id: 1,
        name: "Savings Account"
    },
    {
        id: 2,
        name: "Credit Card"
    },
    {
        id: 3,
        name: "Checking Account"
    },
    {
        id: 4,
        name: "Investment Portfolio"
    },
    {
        id: 5,
        name: "Personal Loan"
    }
]


export const costtoprod = [
    {
        id: 1,
        customerId: 1,
        productId: 101
    },
    {
        id: 2,
        customerId: 2,
        productId: 102
    },
    {
        id: 3,
        customerId: 3,
        productId: 103
    },
    {
        id: 4,
        customerId: 4,
        productId: 104
    },
    {
        id: 5,
        customerId: 5,
        productId: 105
    }
]

import React from 'react'

export const complaint = [
    {
        id: "abc123",
        status: "UNASSIGNED",
        created: "2024-03-15T09:30:00",
        last_updated: "2024-03-15T09:30:00",
        severity: 1,
        resolved_at: null,
        summary: "Billing issue",
        type: "QUERY",
        product_id: 101,
        customer_id: 1,
        employee_id: null
    },
    {
        id: "def456",
        status: "UNASSIGNED",
        created: "2024-03-16T09:30:00",
        last_updated: "2024-03-16T09:30:00",
        severity: 2,
        resolved_at: null,
        summary: "Fraudulent activity",
        type: "QUERY",
        product_id: 102,
        customer_id: 2,
        employee_id: null
    },
    {
        id: "ghi789",
        status: "UNASSIGNED",
        created: "2024-03-17T09:30:00",
        last_updated: "2024-03-17T09:30:00",
        severity: 3,
        resolved_at: null,
        summary: "Account management issue",
        type: "QUERY",
        product_id: 103,
        customer_id: 3,
        employee_id: null
    },
    {
        id: "jkl012",
        status: "UNASSIGNED",
        created: "2024-03-18T09:30:00",
        last_updated: "2024-03-18T09:30:00",
        severity: 1,
        resolved_at: null,
        summary: "Billing dispute",
        type: "QUERY",
        product_id: 104,
        customer_id: 4,
        employee_id: null
    },
    {
        id: "mno345",
        status: "UNASSIGNED",
        created: "2024-03-19T09:30:00",
        last_updated: "2024-03-19T09:30:00",
        severity: 2,
        resolved_at: null,
        summary: "Loan application issue",
        type: "QUERY",
        product_id: 105,
        customer_id: 5,
        employee_id: null
    }
]



export const feedback = [
    {
        id: 1,
        complaint_id: "abc123",
        message: "Thank you for reaching out to us. We will investigate and get back to you soon.",
        timestamp: "2024-03-15T09:45:00",
        sender_id: 1,
        sender: "CUSTOMER_CARE_REP"
    },
    {
        id: 2,
        complaint_id: "def456",
        message: "We have escalated your concern to the appropriate department for further action.",
        timestamp: "2024-03-16T10:00:00",
        sender_id: 2,
        sender: "CUSTOMER_CARE_REP"
    },
    {
        id: 3,
        complaint_id: "ghi789",
        message: "Thank you for bringing this to our attention. We will investigate and provide an update shortly.",
        timestamp: "2024-03-17T10:15:00",
        sender_id: 3,
        sender: "SUPERVISOR"
    },
    {
        id: 4,
        complaint_id: "jkl012",
        message: "We are sorry for the inconvenience caused. Our team is working on resolving this issue.",
        timestamp: "2024-03-18T10:30:00",
        sender_id: 4,
        sender: "MANAGER"
    },
    {
        id: 5,
        complaint_id: "mno345",
        message: "Your loan application is under review. We will update you on the status soon.",
        timestamp: "2024-03-19T10:45:00",
        sender_id: 5,
        sender: "CUSTOMER_CARE_REP"
    }
]


