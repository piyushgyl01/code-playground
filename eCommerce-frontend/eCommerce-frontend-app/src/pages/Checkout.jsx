import React, { useState, useRef, useEffect } from 'react';
import Header from "../Components/Header";
import { useNavigate } from 'react-router-dom';
import useFetch from "../useFetch";

// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CircularProgress from "@mui/material/CircularProgress";

// MUI Icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function Checkout() {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: 'Sri Lanka',
        streetAddress: '',
        townCity: '',
        province: '',
        zipCode: '',
        phone: '',
        email: '',
        additionalInfo: '',
        paymentMethod: 'directBankTransfer'
    });

    const [selectedAddress, setSelectedAddress] = useState(null);
    const [editDialog, setEditDialog] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [addressToDelete, setAddressToDelete] = useState(null);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });
    const [formErrors, setFormErrors] = useState({});

    // Fetch addresses
    const { 
        data: addressesResponse, 
        loading: addressesLoading,
        error: addressesError,
        refetch: refetchAddresses 
    } = useFetch("http://localhost:3000/addresses");

    const addresses = addressesResponse?.address || [];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        const requiredFields = [
            'firstName',
            'lastName',
            'country',
            'streetAddress',
            'townCity',
            'province',
            'zipCode',
            'phone',
            'email'
        ];

        requiredFields.forEach(field => {
            if (!formData[field].trim()) {
                errors[field] = 'This field is required';
            }
        });

        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            errors.phone = 'Please enter a valid 10-digit phone number';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleAddressSelect = (address) => {
        setSelectedAddress(address);
        setFormData({
            firstName: address.firstName,
            lastName: address.lastName,
            companyName: address.companyName || '',
            country: address.country,
            streetAddress: address.streetAddress,
            townCity: address.townCity,
            province: address.province,
            zipCode: address.zipCode,
            phone: address.phone,
            email: address.email,
            additionalInfo: address.additionalInfo || '',
            paymentMethod: formData.paymentMethod
        });
    };

    const handleEditClick = (address) => {
        setEditingAddress(address);
        setFormData({
            firstName: address.firstName,
            lastName: address.lastName,
            companyName: address.companyName || '',
            country: address.country,
            streetAddress: address.streetAddress,
            townCity: address.townCity,
            province: address.province,
            zipCode: address.zipCode,
            phone: address.phone,
            email: address.email,
            additionalInfo: address.additionalInfo || '',
            paymentMethod: formData.paymentMethod
        });
        setEditDialog(true);
    };

    const handleDeleteClick = (address) => {
        setAddressToDelete(address);
        setDeleteDialog(true);
    };

    const handleEditSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await fetch(`http://localhost:3000/addresses/${editingAddress._id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setSnackbar({
                        open: true,
                        message: 'Address updated successfully!',
                        severity: 'success'
                    });
                    setEditDialog(false);
                    refetchAddresses();
                } else {
                    throw new Error('Failed to update address');
                }
            } catch (error) {
                setSnackbar({
                    open: true,
                    message: 'Failed to update address',
                    severity: 'error'
                });
            }
        }
    };

    const handleDeleteConfirm = async () => {
        try {
            const response = await fetch(`http://localhost:3000/addresses/${addressToDelete._id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setSnackbar({
                    open: true,
                    message: 'Address deleted successfully!',
                    severity: 'success'
                });
                setDeleteDialog(false);
                refetchAddresses();
                if (selectedAddress?._id === addressToDelete._id) {
                    setSelectedAddress(null);
                }
            } else {
                throw new Error('Failed to delete address');
            }
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Failed to delete address',
                severity: 'error'
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!selectedAddress) {
            setSnackbar({
                open: true,
                message: 'Please select a delivery address',
                severity: 'error'
            });
            return;
        }
        
        if (validateForm()) {
            setSnackbar({
                open: true,
                message: 'Order placed successfully!',
                severity: 'success'
            });

            setTimeout(() => {
                setFormData({
                    firstName: '',
                    lastName: '',
                    companyName: '',
                    country: 'Sri Lanka',
                    streetAddress: '',
                    townCity: '',
                    province: '',
                    zipCode: '',
                    phone: '',
                    email: '',
                    additionalInfo: '',
                    paymentMethod: 'directBankTransfer'
                });
                navigate('/');
            }, 2000);
        } else {
            setSnackbar({
                open: true,
                message: 'Please fill in all required fields correctly',
                severity: 'error'
            });
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar(prev => ({
            ...prev,
            open: false
        }));
    };

    return (
        <>
            <Header />
            <Box className="container py-5">
                <Box sx={{ mb: 4 }}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                        <Link 
                            href="/"
                            sx={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                color: 'text.primary',
                                textDecoration: 'none'
                            }}
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Home
                        </Link>
                        <Typography color="text.primary">Checkout</Typography>
                    </Breadcrumbs>
                </Box>

                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Checkout
                </Typography>

                {/* Saved Addresses Section */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        Saved Addresses
                    </Typography>
                    {addressesLoading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                            <CircularProgress />
                        </Box>
                    ) : addressesError ? (
                        <Alert severity="error">Failed to load addresses</Alert>
                    ) : addresses.length === 0 ? (
                        <Alert severity="info">No saved addresses found</Alert>
                    ) : (
                        <div className="row">
                            {addresses.map((address) => (
                                <div key={address._id} className="col-md-6 mb-3">
                                    <Card 
                                        sx={{ 
                                            cursor: 'pointer',
                                            border: selectedAddress?._id === address._id ? 2 : 1,
                                            borderColor: selectedAddress?._id === address._id ? 'primary.main' : 'divider'
                                        }}
                                    >
                                        <CardContent>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                                <Box onClick={() => handleAddressSelect(address)} sx={{ flexGrow: 1 }}>
                                                    {selectedAddress?._id === address._id ? 
                                                        <RadioButtonCheckedIcon color="primary" /> : 
                                                        <RadioButtonUncheckedIcon />
                                                    }
                                                    <Typography variant="h6">
                                                        {address.firstName} {address.lastName}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        {address.streetAddress}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        {address.townCity}, {address.province}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        {address.country}, {address.zipCode}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        {address.phone}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <IconButton onClick={() => handleEditClick(address)}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleDeleteClick(address)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    )}
                </Box>

                <div className="row mt-5">
                    {/* Billing Details Form */}
                    <div className="col-md-8">
                        <Paper className="p-4">
                            <Typography variant="h5" gutterBottom>
                                Billing details
                            </Typography>
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            error={!!formErrors.firstName}
                                            helperText={formErrors.firstName}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            error={!!formErrors.lastName}
                                            helperText={formErrors.lastName}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Company Name (Optional)"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <FormControl fullWidth error={!!formErrors.country}>
                                            <InputLabel>Country / Region</InputLabel>
                                            <Select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                label="Country / Region"
                                                required
                                            >
                                                <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                                <MenuItem value="India">India</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Street Address"
                                            name="streetAddress"
                                            value={formData.streetAddress}
                                            onChange={handleInputChange}
                                            required
                                            error={!!formErrors.streetAddress}
                                            helperText={formErrors.streetAddress}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Town / City"
                                            name="townCity"
                                            value={formData.townCity}
                                            onChange={handleInputChange}
                                            required
                                            error={!!formErrors.townCity}
                                            helperText={formErrors.townCity}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <FormControl fullWidth error={!!formErrors.province}>
                                            <InputLabel>Province</InputLabel>
                                            <Select
                                                name="province"
                                                value={formData.province}
                                                onChange={handleInputChange}
                                                label="Province"
                                                required
                                            >
                                                <MenuItem value="Western Province">Western Province</MenuItem>
                                                <MenuItem value="Central Province">Central Province</MenuItem>
                                                <MenuItem value="Southern Province">Southern Province</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="ZIP Code"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            required
                                            error={!!formErrors.zipCode}
                                            helperText={formErrors.zipCode}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            error={!!formErrors.phone}
                                            helperText={formErrors.phone}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            error={!!formErrors.email}
                                            helperText={formErrors.email}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <TextField
                                            fullWidth
                                            label="Additional Information"
                                            name="additionalInfo"
                                            value={formData.additionalInfo}
                                            onChange={handleInputChange}
                                            multiline
                                            rows={4}
                                        />
                                    </div>
                                </div>
                            </form>
                        </Paper>
                    </div>

                    {/* Order Summary */}
                    <div className="col-md-4">
                        <Paper className="p-4">
                            <Typography variant="h5" gutterBottom>
                                Your Order
                            </Typography>
                            <Box sx={{ my: 3 }}>
                                <div className="d-flex justify-content-between mb-2">
                                    <Typography variant="subtitle1">Product</Typography>
                                    <Typography variant="subtitle1">Subtotal</Typography>
                                </div>
                                <Divider />
                                <div className="d-flex justify-content-between my-2">
                                    <Typography color="text.secondary">Asgaard sofa × 1</Typography>
                                    <Typography>Rs. 250,000.00</Typography>
                                </div>
                                <Divider />
                                <div className="d-flex justify-content-between my-2">
                                    <Typography>Subtotal</Typography>
                                    <Typography>Rs. 250,000.00</Typography>
                                </div>
                                <Divider />
                                <div className="d-flex justify-content-between my-2">
                                    <Typography variant="h6">Total</Typography>
                                    <Typography variant="h6" color="primary">Rs. 250,000.00</Typography>
                                </div>
                            </Box>

                            <FormControl component="fieldset">
                                <RadioGroup
                                    name="paymentMethod"
                                    value={formData.paymentMethod}
                                    onChange={handleInputChange}
                                >
                                    <FormControlLabel 
                                        value="directBankTransfer" 
                                        control={<Radio />} 
                                        label="Direct Bank Transfer"
                                    />
                                    <Typography variant="body2" color="text.secondary" sx={{ ml: 4, mb: 2 }}>
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </Typography>
                                    
                                    <FormControlLabel 
                                        value="cashOnDelivery" 
                                        control={<Radio />} 
                                        label="Cash On Delivery"
                                    />
                                </RadioGroup>
                            </FormControl>

                            <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                                <Link href="/privacy-policy" color="primary">
                                    privacy policy
                                </Link>
                                .
                            </Typography>

                            <Button
                                variant="contained"
                                fullWidth
                                size="large"
                                onClick={handleSubmit}
                                sx={{ mt: 2 }}
                            >
                                Place order
                            </Button>
                        </Paper>
                    </div>
                </div>
            </Box>

            {/* Edit Address Dialog */}
            <Dialog open={editDialog} onClose={() => setEditDialog(false)} maxWidth="md" fullWidth>
                <DialogTitle>Edit Address</DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 2 }}>
                        <div className="row g-3">
                        <Dialog open={editDialog} onClose={() => setEditDialog(false)} maxWidth="md" fullWidth>
                <DialogTitle>Edit Address</DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 2 }}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    error={!!formErrors.firstName}
                                    helperText={formErrors.firstName}
                                />
                            </div>
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    error={!!formErrors.lastName}
                                    helperText={formErrors.lastName}
                                />
                            </div>
                            <div className="col-12">
                                <TextField
                                    fullWidth
                                    label="Company Name (Optional)"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-12">
                                <FormControl fullWidth error={!!formErrors.country}>
                                    <InputLabel>Country / Region</InputLabel>
                                    <Select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        label="Country / Region"
                                        required
                                    >
                                        <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                        <MenuItem value="India">India</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-12">
                                <TextField
                                    fullWidth
                                    label="Street Address"
                                    name="streetAddress"
                                    value={formData.streetAddress}
                                    onChange={handleInputChange}
                                    required
                                    error={!!formErrors.streetAddress}
                                    helperText={formErrors.streetAddress}
                                />
                            </div>
                            <div className="col-12">
                                <TextField
                                    fullWidth
                                    label="Town / City"
                                    name="townCity"
                                    value={formData.townCity}
                                    onChange={handleInputChange}
                                    required
                                    error={!!formErrors.townCity}
                                    helperText={formErrors.townCity}
                                />
                            </div>
                            <div className="col-12">
                                <FormControl fullWidth error={!!formErrors.province}>
                                    <InputLabel>Province</InputLabel>
                                    <Select
                                        name="province"
                                        value={formData.province}
                                        onChange={handleInputChange}
                                        label="Province"
                                        required
                                    >
                                        <MenuItem value="Western Province">Western Province</MenuItem>
                                        <MenuItem value="Central Province">Central Province</MenuItem>
                                        <MenuItem value="Southern Province">Southern Province</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-12">
                                <TextField
                                    fullWidth
                                    label="ZIP Code"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    required
                                    error={!!formErrors.zipCode}
                                    helperText={formErrors.zipCode}
                                />
                            </div>
                            <div className="col-12">
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    error={!!formErrors.phone}
                                    helperText={formErrors.phone}
                                />
                            </div>
                            <div className="col-12">
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    error={!!formErrors.email}
                                    helperText={formErrors.email}
                                />
                            </div>
                            <div className="col-12">
                                <TextField
                                    fullWidth
                                    label="Additional Information"
                                    name="additionalInfo"
                                    value={formData.additionalInfo}
                                    onChange={handleInputChange}
                                    multiline
                                    rows={4}
                                />
                            </div>
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditDialog(false)}>Cancel</Button>
                    <Button onClick={handleEditSubmit} variant="contained">Save Changes</Button>
                </DialogActions>
            </Dialog>

                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditDialog(false)}>Cancel</Button>
                    <Button onClick={handleEditSubmit} variant="contained">Save Changes</Button>
                </DialogActions>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
                <DialogTitle>Delete Address</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this address?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialog(false)}>Cancel</Button>
                    <Button onClick={handleDeleteConfirm} color="error" variant="contained">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar for notifications */}
            <Snackbar 
                open={snackbar.open} 
                autoHideDuration={6000} 
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert 
                    onClose={handleCloseSnackbar} 
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
}