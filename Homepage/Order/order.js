// Example customer and order data
const customers = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Smith'
    }
];

const orders = [
    {
        id: 1,
        customerId: 1,
        disorder: 'Headache',
        medicines: 'Medicine A, Medicine B',
        date: '2023-05-01',
        billAmount: 50.00
    },
    {
        id: 2,
        customerId: 2,
        disorder: 'Allergy',
        medicines: 'Medicine C',
        date: '2023-05-02',
        billAmount: 25.00
    },
    {
        id: 3,
        customerId: 1,
        disorder: 'Cough',
        medicines: 'Medicine D',
        date: '2023-05-03',
        billAmount: 35.00
    }
];

// Function to display customer orders in the table
function displayOrders() {
    const ordersTable = document.getElementById('ordersTable');
    const tbody = ordersTable.getElementsByTagName('tbody')[0];

    // Clear existing table rows
    tbody.innerHTML = '';

    // Iterate over orders and create table rows
    for (const order of orders) {
        // Find the customer for the current order
        const customer = customers.find(c => c.id === order.customerId);

        // Create a new table row
        const row = document.createElement('tr');

        // Add table cells for each column
        const customerCell = document.createElement('td');
        customerCell.textContent = customer ? customer.name : '';
        row.appendChild(customerCell);

        const disorderCell = document.createElement('td');
        disorderCell.textContent = order.disorder;
        row.appendChild(disorderCell);

        const medicinesCell = document.createElement('td');
        medicinesCell.textContent = order.medicines;
        row.appendChild(medicinesCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = order.date;
        row.appendChild(dateCell);

        const billAmountCell = document.createElement('td');
        billAmountCell.textContent = order.billAmount.toFixed(2);
        row.appendChild(billAmountCell);

        // Append the row to the table body
        tbody.appendChild(row);
    }
}

// Call the function to display orders on page load
displayOrders();
