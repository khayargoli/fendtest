// pages/Settings.jsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// Define validation schema with Zod
const profileSchema = z.object({
  yourName: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  userName: z.string().min(2, { message: 'Username must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  dateOfBirth: z.string().min(1, { message: 'Date of birth is required' }),
  presentAddress: z.string().min(1, { message: 'Present address is required' }),
  permanentAddress: z.string().min(1, { message: 'Permanent address is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  postalCode: z.string()
    .min(1, { message: 'Postal code is required' })
    .refine(
      (val) => /^\d{5}(-\d{4})?$/.test(val) || val.country !== 'USA',
      { message: 'Invalid US postal code format' }
    ),
  country: z.string().min(1, { message: 'Country is required' })
})

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile')
  
  // Default form values
  const defaultValues = {
    yourName: 'Charlene Reed',
    userName: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '••••••••••',
    dateOfBirth: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA'
  }

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues,
    mode: 'onBlur'
  })

  // Form submission handler
  const onSubmit = (data) => {
    console.log('Form submitted:', data)
    // Here you would typically make an API call to update the user profile
    alert('Profile updated successfully!')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Setting</h1>
      
      <div className="bg-white rounded-lg shadow">
        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`px-8 py-4 font-medium text-sm ${
              activeTab === 'profile' 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Edit Profile
          </button>
          <button
            className={`px-8 py-4 font-medium text-sm ${
              activeTab === 'preferences' 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('preferences')}
          >
            Preferences
          </button>
          <button
            className={`px-8 py-4 font-medium text-sm ${
              activeTab === 'security' 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
        </div>
        
        {/* Profile Edit Form */}
        {activeTab === 'profile' && (
          <form onSubmit={handleSubmit(onSubmit)} className="p-8">
            <div className="flex mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300">
                  {/* This would be an actual image in production */}
                </div>
                <button 
                  type="button" 
                  className="absolute bottom-0 right-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
                >
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div> {/* Edit icon placeholder */}
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Your Name */}
              <div>
                <label htmlFor="yourName" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  id="yourName"
                  className={`w-full p-3 border ${errors.yourName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register('yourName')}
                />
                {errors.yourName && (
                  <p className="mt-1 text-sm text-red-600">{errors.yourName.message}</p>
                )}
              </div>
              
              {/* User Name */}
              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
                  User Name
                </label>
                <input
                  id="userName"
                  className={`w-full p-3 border ${errors.userName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register('userName')}
                />
                {errors.userName && (
                  <p className="mt-1 text-sm text-red-600">{errors.userName.message}</p>
                )}
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register('password')}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
              
              {/* Date of Birth */}
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    id="dateOfBirth"
                    className={`w-full p-3 border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10`}
                    {...register('dateOfBirth')}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div> {/* Calendar icon placeholder */}
                  </div>
                </div>
                {errors.dateOfBirth && (
                  <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
                )}
              </div>
              
              {/* Present Address */}
              <div>
                <label htmlFor="presentAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Present Address
                </label>
                <input
                  id="presentAddress"
                  className={`w-full p-3 border ${errors.presentAddress ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register('presentAddress')}
                />
                {errors.presentAddress && (
                  <p className="mt-1 text-sm text-red-600">{errors.presentAddress.message}</p>
                )}
              </div>
              
              {/* Permanent Address */}
              <div>
                <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Permanent Address
                </label>
                <input
                  id="permanentAddress"
                  className={`w-full p-3 border ${errors.permanentAddress ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register('permanentAddress')}
                />
                {errors.permanentAddress && (
                  <p className="mt-1 text-sm text-red-600">{errors.permanentAddress.message}</p>
                )}
              </div>
              
              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  id="city"
                  className={`w-full p-3 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register('city')}
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>
              
              {/* Postal Code */}
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <input
                  id="postalCode"
                  className={`w-full p-3 border ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register('postalCode')}
                />
                {errors.postalCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>
                )}
              </div>
              
              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  id="country"
                  className={`w-full p-3 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register('country')}
                />
                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
                )}
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        )}
        
        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <div className="p-8">
            <p className="text-gray-500">Preferences settings would go here.</p>
          </div>
        )}
        
        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="p-8">
            <p className="text-gray-500">Security settings would go here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Settings