<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('email', EmailType::class, [

                'label' => 'email',
                'constraints' => [

                    new NotBlank(),
                    new NotNull(),
                ]
            ])
            ->add('roles', ChoiceType::class, [

                'multiple' => true,
                'expanded' => true,
                'choices' => [
                    
                    'Admin' => 'ROLE_ADMIN',
                    'Utilisateur' => 'ROLE_USER',
                ]
            ])
            ->add('password', RepeatedType::class, [

                'type' => PasswordType::class,
                'invalid_message' => 'Mot de passe différent.',
                'first_options' => [

                    'label' => 'Mot de passe',
                    'empty_data' => '',
                ],
                'second_options' => [

                    'label' => 'Vérifier le mot de passe',
                    'empty_data' => '',
                ]
            ])
            ->add('firstname', TextType::class, [

                'required' => false,
            ])
            ->add('lastname', TextType::class, [

                'required' => false,
            ])
            ->add('pseudo', TextType::class, [

                'constraints' => [

                    new NotBlank(),
                    new NotNull(),
                ]
            ])
            ->add('photo', UrlType::class, [

                'required' => false,
            ])
            ->add('birthdate', BirthdayType::class, [

                'widget' => 'single_text',
                'required' => false,
            ])
            ->add('isActive', CheckboxType::class)
            ->add('biography', TextareaType::class, [

                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
