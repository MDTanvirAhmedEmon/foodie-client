import { useGetSingleUserQuery } from "../../redux/features/products/productApi";

const Profile = () => {
  const { data } = useGetSingleUserQuery();

  return (
<div className=" p-6 rounded-lg shadow-lg mt-10">
    <div className="container mx-auto">
        <div className="mt-8">
            <p className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Profile Details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <div className="space-y-4">
                        <p className="text-xl font-semibold text-gray-600">Name</p>
                        <p className="text-xl text-gray-800">{data?.data?.firstName} {data?.data?.lastName}</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xl font-semibold text-gray-600">Email</p>
                        <p className="text-xl text-gray-800">{data?.data?.email}</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xl font-semibold text-gray-600">Phone</p>
                        <p className="text-xl text-gray-800">{data?.data?.phone}</p>
                    </div>
                </div>
                <div>
                    <div className="space-y-4">
                        <p className="text-xl font-semibold text-gray-600">Address</p>
                        <p className="text-xl text-gray-800">{data?.data?.address}</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xl font-semibold text-gray-600">District</p>
                        <p className="text-xl text-gray-800">{data?.data?.district}</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xl font-semibold text-gray-600">Upazila</p>
                        <p className="text-xl text-gray-800">{data?.data?.upazila}</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xl font-semibold text-gray-600">ZIP Code</p>
                        <p className="text-xl text-gray-800">{data?.data?.zipCode}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  );
};

export default Profile;
